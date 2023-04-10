import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServicesService } from '../services/services.service';
import navBarShoppingCategories from '../Data/navBarShoppingCategories';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(private ServicesService : ServicesService, private router: Router){  }

  ngOnInit(): void {  }

  landingPagecategories = this.ServicesService.getLandingPageShoppingCategories();
  
  // navbarCategories = navBarShoppingCategories;
}
