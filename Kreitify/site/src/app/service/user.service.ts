import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: AppUser | null = null;

  setUser(user: AppUser): void {
    console.log('User set in UserService:', user); // Debugging line
    this.currentUser = user;
  }

  getUser(): AppUser | null {
    return this.currentUser;
  }
}

export interface AppUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
