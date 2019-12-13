import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
 
})
export class AdmincomponentComponent{

  activeLink:string="";
  message:string="";
  constructor( public router:Router, private _adminservice:AdminService) { }

  ngOnInit() {
  }
 changeLink(value){
   this.activeLink=value;
 }


  authenticate(email:string,password:string){
    this._adminservice.authenticate(email,password).then(response=>{
     
      if(response){
       //this.message="login sucessfully";
       // console.log(response);
        this.router.navigate(['../home']);
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
