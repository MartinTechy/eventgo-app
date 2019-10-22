import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private email: string;
  private password: string;
  private passwordConfirmation: string;
  
  
  constructor(private authApi: AuthService, private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  register() {
    this.authApi.cognitoSignUp(this.email, this.password).then(async data => {
      this.router.navigateByUrl('/auth');
      const alert = await this.alertController.create({
        header: "Account created",
        message: "You have received an email to confirm your email address",
        buttons: ['Ok']
      })
      await alert.present();
    }).catch(async error => {
      switch(error.code) {
        case "UsernameExistsException" :
            const alert = await this.alertController.create({
              header: "Error",
              message: "An account already exists for this email address",
              buttons: ['Ok']
            })
            await alert.present();
          break;
      }
    })
  }


}
