import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal, private ServicesService: ServicesService, private route: Router) {
  };
  
  //--------------Handle search-------------------------
  searchValue:string = "";
  //navigate to the search value to show search results
  searchResult(){
    this.route.navigate(['/productList',this.searchValue]);
  }

  //--------------Show cart----------------------------
  @Output() showCartEmitter = new EventEmitter<boolean>();
  showCart(){
    this.showCartEmitter.emit(true);
  }

  //--------------Show Home-----------------------------
  @Output() showHomePage = new EventEmitter<boolean>();
  goToHomePage(){
    this.showHomePage.emit(true);
  }

  ngOnInit(): void {
    this.ServicesService.changeInCoutEventEmitter.subscribe(()=>{
      this.cartCount = this.ServicesService.getCartSize();
    });
  }
  
  

  //----------------Get Cart status using service-----------
  cartCount:number = this.ServicesService.totalProductPresentInCart;
  ngOnChanges(changes: SimpleChanges): void {
    this.cartCount = this.ServicesService.totalProductPresentInCart;
  }
  


  loggedInUser:string = "admin...";
  isUserLoggedIn:boolean = this.ServicesService.getLoginStatus();
  userDetails: object = {};

  //To open the login screen component
  openModal() {
    const modalRef = this.modalService.open(LoginScreenComponent);
    modalRef.result.then((result) => {  //to get the data when the login is successfull   
      this.isUserLoggedIn = true;
      this.loggedInUser = result.validEmail;
    }).catch((error) => {
      console.log(error + "occurred while opening the login modal");
    });
  }

  userLoggedOut(){
    this.isUserLoggedIn = false;
    this.loggedInUser = "";
    this.ServicesService.setLoginStatus();
  }

  

}
