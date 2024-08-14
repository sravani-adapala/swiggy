import { Component, EventEmitter, Output } from '@angular/core';
import { UserregisterService } from '../userregister.service';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  name:string="Angular Demo";
  subject= new Subject<string>();


  constructor(private userregister:UserregisterService){

    this.subject.subscribe( data =>{
      console.log(" from subject subscribe "+ data);
    });
    console.log("From Constructor");

  
  }

  company:string='';

  @Output()
  userNameEmitter:EventEmitter<string> = new EventEmitter();


  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  submitForm(from: any): void{
    this.subject.next("testing subject angular"+this.userDetails.name);

    this.subject.next(" 22222222222 ");

    this.subject.next(" 33333333333333 ");

    this.userNameEmitter.emit(this.userDetails.name);

    


    var response=this.userregister.learnObservable().subscribe(
      data =>{
        console.log('from abservable '+ response);
 
      }
    );
  }

  register(form: any): void {

    this.userregister.learnObservable().subscribe(


      data => {
        
        console.log(" from customer learn observable subcription ");

      }
    

    );
    



    var response=this.userregister.registerUser(this.userDetails);
    response.subscribe(response=>{
      console.log("from subscribe of observable " +JSON.stringify (response) )  ;

    },
    error=>{
      console.log("from subscribe of observable error");
      
    }
  )
  

    console.log("registration in progress",JSON.stringify(this.userDetails)+" Response " +response);
   
  
  }

}
