import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router, private _registerService:RegisterService) { }

  ngOnInit() {
  }
  message:string="";
  register(user)
  {
    this._registerService.signUp(user).then(response=>{
     
        this.message="sucessful";
        console.log(response);
        this.router.navigate(['../login']);
    }).catch(error=>{
      console.log(error);
    })
    }

}
