import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../Services/productservice.service';
import { Product } from '../../Model/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{
  constructor(public hs:ProductserviceService,public rt:Router){}
  data:Product[]
  ngOnInit(): void {
    this.hs.getproduct().subscribe((d:Product[])=>{
      this.data=d;
    })
  }
 
  deleterecord(id:number){
    this.hs.deletep(id).subscribe();
    window.location.reload();
    alert('Product Delete Successfully')
  }
  onedit(stu:Product)
  {
  let stujson:string=JSON.stringify(stu);
  this.rt.navigateByUrl("/edit/"+stujson);
  
  }
}
