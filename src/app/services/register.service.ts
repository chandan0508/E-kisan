import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }

  signUp(user)
  {
 return this._http.post(`http://localhost:8080/api/user`,user).toPromise();
  }


}
