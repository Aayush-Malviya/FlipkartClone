import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    if(this.isLoggedIn===true)
      this.isLoggedIn = false;
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

  

}
