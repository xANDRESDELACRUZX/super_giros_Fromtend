import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // Variable global
   private token: string = "";
   private userId: number = 0;

   constructor() {
    this.token = localStorage.getItem("userToken") || '';
    this.userId = parseInt(localStorage.getItem("userId") || '0', 10);
   }

   // Métodos para acceder y modificar la variable
   setToken(token: string) {
     this.token = token;
     localStorage.setItem("userToken", token);
   }

   getToken() {
     return this.token;
   }

   setUserID(userId: number) {
    this.userId = userId;
    localStorage.setItem("userId", userId.toString());
  }

  getUserId() {
    return  this.userId;
  }
}
