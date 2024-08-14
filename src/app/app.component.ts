import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fullNameForChild: string = '';

    
 
   constructor(private router:Router,private userregisterService:UserregisterService){

    this.userregisterService.userNameBehavior.subscribe( data =>{
        this.fullNameForChild=data;

        console.log(" from app component subscribe ");
      }
    )

   }


  register() {
    console.log('Register User');
     this.router.navigate(['register']);
    
  }

  forgotpassword() {
    console.log('Forgot Password');
    this.router.navigate(['forgotpassword']);
    
  }

  Login() {
    console.log('Login');
    
  }
}
