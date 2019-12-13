import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewproductuser',
  templateUrl: './viewproductuser.component.html',
  styleUrls: ['./viewproductuser.component.css']
})
export class ViewproductuserComponent implements OnInit {

  products:any = [];
  constructor(private _userService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    this._userService.getcategory().then(response=>{
      this.products = response;
      console.log(response);
    }).catch(error=>{
      console.log("error");
    })
  }

  }


