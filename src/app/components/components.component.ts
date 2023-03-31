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

  searchValue:string = "";

  searchWithProductId:number = 1;

  constructor(private ServicesService : ServicesService, private router: Router){
    this.router.events.subscribe((event) => {       
      event instanceof NavigationEnd ? this.route = event.url: 
      "";
      console.log(this.route);     
    })
  }

  ngOnInit(): void {
    
  }

  showProductData(Id:number){
    this.searchWithProductId = Id;
    this.route = "productView"
  }

  searchResults(searchVaue:string){
    this.searchValue = searchVaue;
    this.route = "productList";
  }

  showCartProducts(showCartOrNot:boolean){
    this.route = "cart";
  }

  showHomePage(showOrNot:boolean){
    this.route = "/";
    this.router.navigate(['/']);
  }

}
