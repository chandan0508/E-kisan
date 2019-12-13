import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincomponentComponent } from 'src/app/components/admincomponent/admincomponent.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { ViewuserComponent } from 'src/app/components/viewuser/viewuser.component';
import { UserhomeComponent } from 'src/app/components/userhome/userhome.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { ProductviewadminComponent } from 'src/app/components/productviewadmin/productviewadmin.component';
import { AppComponent } from 'src/app/app.component';
import { ViewproductuserComponent } from 'src/app/components/viewproductuser/viewproductuser.component';



const routes: Routes = [
  {path:"adminlogin",component:AdmincomponentComponent},
  {path:"login",component:UserComponent},
  {path:"getcategory",component:ViewproductuserComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"ViewUser",component:ViewuserComponent},
    {path:"AddProduct",component:CategoryComponent},
    {path:"ViewCategory",component:ProductviewadminComponent},
    {path:"logout",component:AppComponent}
  ]},
  {path:"userhome",component:UserhomeComponent,children:[
    {path:"getcategory",component:ViewproductuserComponent},
    {path:"logout",component:AppComponent}  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
