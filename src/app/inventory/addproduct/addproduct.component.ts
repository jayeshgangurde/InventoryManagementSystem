import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductserviceService } from '../../Services/productservice.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Model/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{
  constructor(public fb:FormBuilder,public hs:ProductserviceService,public rt:ActivatedRoute){}
  flag:boolean=false;
  productform:FormGroup;
  ngOnInit(): void {
    this.productform=this.fb.group({
      productid:[],
      productname:[],
      productprice:[],
      productcolor:[],
      availablequantity:[],
      supplier:this.fb.group({
        supplierid:[],
        suppliername:[],
        supplieremail:[],
        supplieraddress:[],
        pincode:[]

      })
    })
    this.geteditdata();
  }
addp()
{
  if(this.flag)
  {
   this.hs.edit(this.productform.value).subscribe();
   alert('data upadate successfully')
  }else
  {
  this.hs.addproduct(this.productform.value).subscribe(
    (data:any)=>{
      if(data!=null)
      {
        alert("Product Data Added Successfully")
      }
    },
    (error:any)=>{
      if(error.status==500)
      {
        alert("email is already used...!");
      }
    }
  );

}}
geteditdata()
{
  this.rt.paramMap.subscribe(
    (param:any)=>
    {
    let stujson=param.get('stu');
    if(stujson!=null){
    let s:Product=JSON.parse(stujson)
    this.productform.patchValue(s);
    this.flag=true;
    }}
    )
}
}
