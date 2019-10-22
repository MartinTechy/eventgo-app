import { Injectable } from '@angular/core';
import { APIService } from './API.service';
import { User } from './models/user';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private awsApi:APIService, private locationApi:LocationService) { }

  createUser(user: User): Promise<any>{
    let locationId: string = null;

    console.log('creating location for user ', user);
    //return this.locationApi.createLocation(user.address);


    return this.awsApi.CreateUser({
      userIdCognitoPool: user.userIdCognitoPool,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phone,
      birthDate: user.birthdate,
      language: user.language,
      // userAddressId: locationId
    })

    
  }


  getUserByCoginitoPoolId(cognitoPoolId: string): Promise<any> {
    return this.awsApi.ListUsers({
      userIdCognitoPool: {
        eq: cognitoPoolId
      }
    })
  }

}
