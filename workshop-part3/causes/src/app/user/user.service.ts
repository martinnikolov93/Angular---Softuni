import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn: boolean;

  currentUser: { email: string; password: string } = null;

  constructor() { 
    this.isLoggedIn = false;
  }

  get isLogged (){
    return this.isLoggedIn;
  }

  get getCurrentUser (){
    this.currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    return this.currentUser;
  }

  login(email: string, password: string) {
    sessionStorage.setItem("current-user", JSON.stringify({email, password}));
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
    sessionStorage.clear;
  }
  
}
