import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import data from '../Data/productDetails';
import categories from '../Data/productCategories';
import navBarShoppingCategories from '../Data/navBarShoppingCategories';
import landingPageShoppingCategories from '../Data/landingPageShoppingCategories';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private email : string;
  private isLoggedIn:boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.email = '';
    this.isLoggedIn = false;
  }

  getProductData(){
	return data;
  }

  getProductCategories(){
	return categories
  }

  getProductById(id : number){
	return data[id];
  }

  getNavBarShoppingCategories(){
    return navBarShoppingCategories;
  }

  getLandingPageShoppingCategories(){
    return landingPageShoppingCategories;
  }

  getLoginStatus() : boolean{
    return this.isLoggedIn;
  }

  setLoginStatus() : void{
    if(this.isLoggedIn===true){
      this.removeAllProducts();
      this.totalProductPresentInCart = 0;
      this.raiseChangeInHashMapEvent();
      this.isLoggedIn = false;
    }
    else
      this.isLoggedIn = true;
  }

  /*-----------------------to get & set email we got from login component---------------------*/
  getEmail() : string{
    return this.email;
  }
  setEmail(newEmail: string ){
    this.email = newEmail;
  }
  
  /*-------------------------------------Cart----------------------------------*/ 
  totalProductPresentInCart:number = 0;
  hashMap:any = new Map<number, number>(); 

  addToCart(productdataId: number){
    this.totalProductPresentInCart += 1;
    if (this.hashMap.has(productdataId) === false) {
      this.hashMap.set(productdataId, 1);
    } else {
      let temp: number = this.hashMap.get(productdataId) as number;  //use "as number" otherwise was giving error because of get method & we are telling that we are sure that it will return number
      temp = temp + 1;
      this.hashMap.set(productdataId, temp);
    }
    this.raiseChangeInHashMapEvent();
  }

  removeFromCart(productdataId:number){
    if(this.totalProductPresentInCart==0){
      this.removeAllProducts();
    }
    this.totalProductPresentInCart -= 1;
    if(this.hashMap.get(productdataId)==1)
      this.hashMap.delete(productdataId);
    else{
      let temp: number = this.hashMap.get(productdataId) as number;
      this.hashMap.set(productdataId, temp - 1);
    }
    this.raiseChangeInHashMapEvent();
  }

  removeAllProducts(){
    this.totalProductPresentInCart = 0;
    this.hashMap.clear();
  }

  getCartSize(){
    return this.totalProductPresentInCart;
  }

  getHashMap(){
    return this.hashMap;
  }

  //Use BehaviorSubject instead of subject to emit every time it changes
  //BehaviuorSubject requires initial value 

  changeInHashMap = new BehaviorSubject<any>(null);
  raiseChangeInHashMapEvent(){
    this.changeInHashMap.next(this.hashMap);
  }

  changeInCoutEventEmitter = new Subject<number>();
  raiseChangeInCoutEventEmitter(emittedDataFromSingleProductComponent:number){
    this.changeInCoutEventEmitter.next(this.totalProductPresentInCart);
  }
}
