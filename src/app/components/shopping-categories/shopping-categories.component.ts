import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-shopping-categories',
  templateUrl: './shopping-categories.component.html',
  styleUrls: ['./shopping-categories.component.scss']
})
export class ShoppingCategoriesComponent implements OnInit {

  constructor(private ServicesService : ServicesService) { }

  ngOnInit(): void {}
  
  categories = this.ServicesService.getNavBarShoppingCategories();

  @Input() category : any;
}
