import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  constructor(private fireAuth: AngularFireAuth, private router: Router) { 
    this.fireAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  // Login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard'])
    }, err => {
      alert("lỗi rồi bạn ơi");
      this.router.navigate(['/login'])
    })
  }

  // register method
  register(email : string, password : string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Successs")
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }



  // Logout method
  logout(){
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message)
    })
  }

  
}
