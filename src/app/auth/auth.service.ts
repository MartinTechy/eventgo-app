import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';


@Injectable()
export class AuthService {

  private signedIn:boolean = false;
  private user:any;

  constructor(private amplifyService:AmplifyService) { 
    this.amplifyService.authStateChange$
        .subscribe(authState => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
            }
    });
  }

  isLogged(): boolean {
    return this.signedIn;
  }

  getUser(): any {
    return this.user;
  }
}
