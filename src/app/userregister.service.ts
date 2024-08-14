import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {


  userNameBehavior=new BehaviorSubject<string>(' Neoteric ');

  emitName(name:any):void{
    this.userNameBehavior.next(name);
  }




  private apiurl = 'http://localhost:8080/api/registerUser';


  constructor(private http:HttpClient) {

    console.log(" from constructor in UserregisterService ");
   }

  learnObservable():Observable<string>{


    return new Observable<string>(observer => {

      console.log(' observer executed ');

      observer.next(' from customer observable ');



    });

    

  }

  registerUser(user:any):Observable<Object>{
    console.log('in service'+JSON.stringify(user));
    //method
    //path
    //protocol
    //Headers
    //body
    const httpHeaders ={

        headers:new HttpHeaders({
          'accepts':'application/json',
          'Content-Type':'application/json',
          'Accept':'application/json'
        })
    };
console.log("From Service Method")    
    
    return this.http.post(this.apiurl,user,httpHeaders);;
  }
}

 