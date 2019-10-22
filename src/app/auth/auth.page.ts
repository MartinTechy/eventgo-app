import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {

  private email: string;
  private password: String;

  constructor(private authService:AuthService, private router:Router, private alertController: AlertController, private toastController: ToastController) { }

  logIn(){
    this.authService.signIn(this.email, this.password).then(data => {
    }).catch(async (error) => {
      switch(error.code) {
        case "UserNotConfirmedException" :
            const alert = await this.alertController.create({
              header: "Error",
              subHeader: "Email not verified",
              message: "You need to verify your email before.",
              buttons: [{
                text:"Resend mail",
                handler: () => {
                  this.authService.resendConfirmationEmail(this.email).then(async data => {
                    const toast = await this.toastController.create({
                      message: 'Email sent to ' + this.email,
                      duration: 2000
                    });
                    toast.present();
                  }).catch(async error => {
                    const toast = await this.toastController.create({
                      message: 'An error occured, please try later',
                      duration: 2000
                    });
                    toast.present();
                  })
                }
              },'Ok']
            })
            await alert.present();
          break;
      }
    })
  }

}
