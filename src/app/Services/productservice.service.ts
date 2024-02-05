import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(public http:HttpClient) {}
  
  addproduct(data:Product)
  {
   return this.http.post("http://localhost:9090/addproduct",data)
  }
 getproduct()
 {
  return this.http.get("http://localhost:9090/viewallproduct")
 }
 deletep(id:number){
  return this.http.delete("http://localhost:9090/deleteprod/"+id)
 }
 edit(id:Product)
 {
  return this.http.put("http://localhost:9090/editprod/"+id.productid,id)
 }
}
