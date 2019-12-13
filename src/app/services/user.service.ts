import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  
  validate(email:string, password:string){
    return this._http.get(`http://localhost:8080/api/user/${email}/${password}`).toPromise();

  }
  getuser(email:string)
  {
    return this._http.get(`http://localhost:8080/api/user/${email}`).toPromise();
  }
  
  getcategory(){
    return this._http.get(`http://localhost:8080/api/user/viewproduct`).toPromise();
  }

}
