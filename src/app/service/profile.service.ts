import { Injectable } from '@angular/core';
import { profileData } from '../data/profileData';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfiles(): Profile[] {
    return profileData;
  }
}
