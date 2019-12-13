import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmincomponentComponent } from './components/admincomponent/admincomponent.component';
import { AdminService } from 'src/app/services/admin.service';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductviewadminComponent } from './components/productviewadmin/productviewadmin.component';
import { ViewproductuserComponent } from './components/viewproductuser/viewproductuser.component';
import { UserService } from 'src/app/services/user.service';



 


@NgModule({
  declarations: [
    AppComponent,
    AdmincomponentComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    ViewuserComponent,
    UserhomeComponent,
    CategoryComponent,
    ProductviewadminComponent,
    ViewproductuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
