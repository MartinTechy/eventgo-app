import { Location } from './location';

export class User {
    userIdCognitoPool?: string;
    firstName: string; 
    lastName: string;
    email: string;
    password?: string;
    address?: Location;
    gender?: string;
    phone?: string;
    birthdate?: string;
    language: string;
}
