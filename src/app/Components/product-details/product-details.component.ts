import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/Api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'] 
})
export class ProductDetailsComponent {
  list:any
constructor (
  private route:ActivatedRoute,
  private PrdApiServ:ApiService
  ){
  let id = this.route.snapshot.params["id"];
    this.PrdApiServ.GetProductByID(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.list =response.data 
      }
    })
}





}
