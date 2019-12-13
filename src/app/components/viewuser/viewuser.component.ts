import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  users:any = [];
  constructor(private _adminService:AdminService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    this._adminService.getAllUsers().then(response=>{
      this.users = response;
    }).catch(error=>{
      console.log("error");
    })
  }

  delete(id){
    this._adminService.Delete(id).then(response=>{
      for(let i=0;i<this.users.length;i++)
      {
        if(this.users[i].id==id)
        {
          this.users.splice(i,1);
        }
      }
    })
  }

}

