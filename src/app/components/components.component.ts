import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  route : string = "home";

  constructor(private ServicesService : ServicesService, private router: Router){
    this.router.events.subscribe((event) => {       
      event instanceof NavigationEnd ? this.route = event.url: "";    
    })
  }

  ngOnInit(): void {
    
  }

  showCartProducts(showCartOrNot:boolean){
    this.route = "cart";
  }

  showHomePage(showOrNot:boolean){
    this.route = "/";
    this.router.navigate(['/']); //to remove the earlier path when navigating to home
  }

}
