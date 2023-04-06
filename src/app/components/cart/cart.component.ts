import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import data from 'src/app/productData/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public ServicesService :ServicesService) { }
   
  cartData:any = [];
  quantity:number[] = [];
  price : number = 0;
  discount:number = 0;
  total:number = 0;


  

  ngOnInit(): void {
    //Need to subscribe to changes happening to hashmap in service to update
    this.ServicesService.changeInHashMap.subscribe((newHashMap:any)=>{
      this.cartData = [];
      this.quantity = [];
      this.price = 0;
      this.discount = 0;
      this.total = 0;
      for (let entry of newHashMap.entries()) {
        console.log(entry);
        let id = entry[0];
        let count = entry[1];
  
        let tempOriginalPrice = parseFloat(data[id-1].originalPrice.replace(/,/g, ''))*count;
        tempOriginalPrice = Math.round(tempOriginalPrice * 100) / 100;
        this.price += tempOriginalPrice;
  
        let tempPrice = parseFloat(data[id-1].price.replace(/,/g, ''))*count;
        tempPrice = Math.round(tempPrice * 100) / 100;
        this.total += tempPrice;
  
        this.cartData.push(data[id-1]);
        this.quantity.push(count);
      }
      this.discount = this.price - this.total;
    });   
  }  

  increaseQuantity(id:number){
    this.ServicesService.addToCart(id);
    this.ServicesService.raiseChangeInCoutEventEmitter(1);
  }

  decreaseQuantity(id:number, index:number){
    if(this.quantity[index]==0)
      return;
    if(this.ServicesService.getCartSize()==0){
      this.ServicesService.removeAllProducts();
      return;
    }
    this.ServicesService.removeFromCart(id);
    this.ServicesService.raiseChangeInCoutEventEmitter(1);
  }

  placeOrderButtonClicked(){
    if(this.ServicesService.getLoginStatus()==true){
      alert("Order Placed Successfull");
    }
    else{
      alert("Please Login to Place Order");
    }
  }

  getNumberOfProducts(){
    return this.cartData.length;
  }
  
}
