import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

	declare loginForm: FormGroup;

	ngOnInit(): void {
	this.loginForm = new FormGroup({		
		email: new FormControl(null, [Validators.required, Validators.email]),
		password : new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
	});
	}

	onSubmit(){
		this.checkLoginCredentials();
	}


	constructor(private ServicesService: ServicesService, private activeModalService: NgbActiveModal) {  }

	validCredentials = {
		validEmail : "admin@gmail.com",
		validPassword : "Admin@#1"
	};

	/*------------------------Validating login Credentials on button click---------------*/

	checkLoginCredentials(){
		if(!(this.loginForm.value.email===this.validCredentials.validEmail))
			alert("Incorrect Email");
		if(!(this.loginForm.value.password===this.validCredentials.validPassword))
			alert("Incorrect Password");
		if(this.validCredentials.validEmail===this.loginForm.value.email && this.validCredentials.validPassword==this.loginForm.value.password){
			this.ServicesService.setEmail(this.loginForm.value.email);
			this.ServicesService.setLoginStatus();
			this.activeModalService.close(this.validCredentials);
		}
	}

	isOpen:boolean = false;

	@ViewChild('passwordFeild') passwordRef!: ElementRef;
	showPassword = false;
	password() {
		this.passwordRef.nativeElement.type = this.passwordRef.nativeElement.type=='password'?'text':'password'
		this.showPassword = !this.showPassword;
	}  
}