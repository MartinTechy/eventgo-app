import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { UserApiService } from '../api/user-api.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  constructor(private amplifyService:AmplifyService, private userApi:UserApiService, private router: Router) {
    //Subscribe to future changes
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log('authstate', authState)
        if (!authState.user) {
          localStorage.removeItem('userLogged');
        } else {
          this.userApi.getUserByCoginitoPoolId(authState.user.username).then(data => {
            if(data.items.length === 0) {
              localStorage.setItem('userLogged', JSON.stringify({}));
            }else {
              localStorage.setItem('userLogged', JSON.stringify(data.items[0]));
            }

            if(router.url === '/auth'){
              this.router.navigateByUrl('/home')
            }
          })
        }
    });
  }

   isLogged(): boolean {
    return (this.getUser() !== null);
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('userLogged'));
  }

  cognitoSignUp(email: string, password:string): Promise<any> {
    return Auth.signUp({
      username: email,
      password: password
      });
  }

  resendConfirmationEmail(username: string): Promise<string> {
    return Auth.resendSignUp(username);
  }

  signIn(email, password): Promise<any> {
    return Auth.signIn(email, password).then(data => {
      return { "cognitoUserData": data, "userData" : "salut" };
    });
  }

  async logOut(): Promise<any> {
    return Auth.signOut();
  }
}
