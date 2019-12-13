import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
 


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message:string="";
   

  constructor(public router:Router, private _userService:UserService) { }
  users:any = [];

  ngOnInit() {
  }

  validate(email:string,password:string){
    this._userService.validate(email,password).then(response=>{
      
      if(response){
        sessionStorage.setItem("email",email);
        
        //this.message="login sucessfully";
        // console.log(response);
         this.router.navigate(['../userhome']);

      }
     else{
      console.log(response);
      this.message="Invalid credential";
     }
     
       }).catch(error=>{
            console.log(error);
            
          
        });
      }
      }


