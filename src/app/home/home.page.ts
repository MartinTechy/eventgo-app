import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authApi: AuthService) { }

  ngOnInit() {
    console.log(this.authApi.getUser())
    //TODO: If the user is null, show the first loggin screen
  }

}
