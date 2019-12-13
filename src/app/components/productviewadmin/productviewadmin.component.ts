import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productviewadmin',
  templateUrl: './productviewadmin.component.html',
  styleUrls: ['./productviewadmin.component.css']
})
export class ProductviewadminComponent implements OnInit {

  products:any = [];
  constructor(private  _adminService:AdminService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    this._adminService.getAllProducts().then(response=>{
      this.products = response;
      console.log(response);
    }).catch(error=>{
      console.log("error");
    })
  }
  

  Deleteproduct(id){
    this._adminService.Deleteproduct(id).then(response=>{
      for(let i=0;i<this.products.length;i++)
      {
        if(this.products[i].id==id)
        {
          this.products.splice(i,1);
        }
      }
    })
  }

}
