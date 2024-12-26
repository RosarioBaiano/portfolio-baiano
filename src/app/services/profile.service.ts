import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'aleixobaiano@icloud.com',
      name: 'Rosário Baiano Muanda',
      whatsApp: 'https://wa.link/me4jj5',
      linkedIn: ''
    }

    return profile;
  }
}
