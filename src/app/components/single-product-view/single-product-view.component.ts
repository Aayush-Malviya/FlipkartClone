import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.scss']
})
export class SingleProductViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productListCategories = [
    {
      id : 1 , categoryName : "Electronics", subCategory: true
    },
    {
      id : 2 , categoryName : "TVs & Appliances", subCategory: true
    },
    {
      id : 3 , categoryName : "Men", subCategory: true
    },
    {
      id : 4 , categoryName : "Women", subCategory: true
    },
    {
      id : 5 , categoryName : "Baby & Kids", subCategory: true
    },
    {
      id : 6 , categoryName : "Home & Furniture", subCategory: true
    },
    {
      id : 7 , categoryName : "Sports, Books & More", subCategory: true
    },
    {
      id : 8 , categoryName : "Flights",  subCategory: false
    },
    {
      id : 9 , categoryName : "Offer Zone", subCategory: false
    }
  ]
}
