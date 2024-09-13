import { Injectable } from '@angular/core';

interface user {
  name: string;
  loggedIn: boolean;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: user = {
    name: 'salman',
    loggedIn: false,
    role: 'admin',
  };

  constructor() {}

  onLogIn(loggedIn: boolean, role: string) {
    this.loggedInUser.loggedIn = loggedIn;
    this.loggedInUser.role = role;
  }
}
