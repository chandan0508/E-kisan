import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }


authenticate(email:string, password:string){
  return this._http.get(`http://localhost:8090/api/admin/${email}/${password}`).toPromise();
}
getAllUsers(){
  return this._http.get(`http://localhost:8090/api/admin/view`).toPromise();
}
Delete(id:number){
  return this._http.delete(`http://localhost:8090/api/admin/delete/${id}`).toPromise();
}
AddProduct(product){
  return this._http.post(`http://localhost:8090/api/admin/product`,product).toPromise();
}
getAllProducts(){
  return this._http.get(`http://localhost:8090/api/admin/viewproduct`).toPromise();
}
Deleteproduct(id:number){
  return this._http.delete(`http://localhost:8090/api/admin/deleteproduct/${id}`).toPromise();
}

}