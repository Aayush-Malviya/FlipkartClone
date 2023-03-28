import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() navbarSearchValueEmitter = new EventEmitter<string>();
  searchValue:string = "";
  
  ngOnInit(): void {
  }
  
  constructor(private modalService: NgbModal, private ServicesService: ServicesService) {
  };

  //emit the search value to show search results
  searchResult(){
    this.navbarSearchValueEmitter.emit(this.searchValue);
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
  }

  // setUserName(){
  //   this.ServicesService.getEmail();
  //   this.isUserLoggedIn = true;
  // }

  // unsetUserName(){
  //   this.ServicesService.setLoginStatus();
  //   this.isUserLoggedIn = false;
  // }

}
