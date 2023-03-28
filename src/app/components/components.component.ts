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

  isUserSearching:boolean = false;
  searchValue:string = "";

  constructor(private ServicesService : ServicesService){
  }

  searchResults(searchVaue:string){
    this.isUserSearching = true;
    this.searchValue = searchVaue;
    // console.log(searchVaue);
  }

}
