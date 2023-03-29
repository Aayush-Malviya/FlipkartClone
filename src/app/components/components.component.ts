import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  ngOnInit(): void {
  }

  route : string = "home";

  searchValue:string = "";

  searchWithProductId:number = 1;

  constructor(private ServicesService : ServicesService){
  }

  setRoute(Id:number){
    this.searchWithProductId = Id;
    this.route = "productView"
    // console.log("id got from product card is "+this.searchWithProductId);
  }

  searchResults(searchVaue:string){
    this.route = "productList";
    this.searchValue = searchVaue;
  }

}
