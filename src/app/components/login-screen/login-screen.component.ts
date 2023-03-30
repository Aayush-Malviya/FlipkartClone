import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  @Output() loginComponentEventEmitter = new EventEmitter<Object>();
  email : string = '';
  password : string = '';

  constructor(private ServicesService: ServicesService, private modalService: NgbModal, private activeModalService: NgbActiveModal) {
    this.email = '';
  }

  validCredentials = {
    validEmail : "admin@gmail.com",
    validPassword : "admin"
  };

  // closeModal(){
  //   const modalRef = this.modalService.dismissAll();
  // }

  /*------------------------Validating login Credentials on button click---------------*/
  
  checkLoginCredentials(){
    if(!(this.email.length > 10 && this.email.substring(this.email.length-10)==="@gmail.com"
          && this.email===this.validCredentials.validEmail))
      alert("Invalid email");
    if(!(this.password===this.validCredentials.validPassword))
      alert("Invalid Password");
    if(this.validCredentials.validEmail===this.email && this.validCredentials.validPassword==this.password){
      this.ServicesService.setEmail(this.email);
      this.ServicesService.setLoginStatus();
      this.activeModalService.close(this.validCredentials);
      // console.log(this.ServicesService.getEmail());
      // console.log(this.ServicesService.getLoginStatus());
    }
  }

  /*------------------------Opening modal from another component------------------------*/
  isOpen:boolean = false;
  ngOnInit(): void {
    this.ServicesService.modalState$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  // close() {
  //   this.ServicesService.closeModal();
  // }
}