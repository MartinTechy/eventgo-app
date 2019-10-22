import { Injectable } from '@angular/core';
import { APIService } from './API.service';
import { Location } from './models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private awsApi:APIService) { }

  createLocation(location:Location): Promise<any>{
    return this.awsApi.CreateLocation(location)
  }
}
