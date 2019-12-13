import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
 
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute, private _AdminService:AdminService) { }

  ngOnInit() {
  }

  message:string="";
  AddProduct(product)
  {
     this._AdminService.AddProduct(product).then(response=>{
     
        this.message="sucessful";
        console.log(response);
        //this.router.navigate(['../login']);
    }).catch(error=>{
      console.log(error);
    })
    }
}
