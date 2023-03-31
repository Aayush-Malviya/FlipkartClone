import { Injectable, Inject, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
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

  /*----------------------to open & close the modal present in login Component----------------*/

  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }

  /*-------------------------------------Cart----------------------------------*/ 
  totalProductPresentInCart:number = 0;
  hashMap:any = new Map<number, number>(); 

  addToCart(productdataId: number) {
    console.log(productdataId);
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
