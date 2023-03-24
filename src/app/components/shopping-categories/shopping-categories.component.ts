import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-categories',
  templateUrl: './shopping-categories.component.html',
  styleUrls: ['./shopping-categories.component.scss']
})
export class ShoppingCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {
      id : 1 , categoryName : "Grocery", categoryImage : "assets/groceryImage.webp", subCategory: false
    },
    {
      id : 2 , categoryName : "Mobiles", categoryImage : "assets/Mobiles.webp", subCategory: false
    },
    {
      id : 3 , categoryName : "Fashion", categoryImage : "assets/FashionImage.webp", subCategory: true
    },
    {
      id : 4 , categoryName : "Electronics", categoryImage : "assets/Electronics.webp", subCategory: true
    },
    {
      id : 5 , categoryName : "Home", categoryImage : "assets/Home.webp", subCategory: true
    },
    {
      id : 6 , categoryName : "Appliances", categoryImage : "assets/Appliances.webp", subCategory: false
    },
    {
      id : 7 , categoryName : "Travel", categoryImage : "assets/Travel.webp", subCategory: false
    },
    {
      id : 8 , categoryName : "Top Offers", categoryImage : "assets/TopOffers.webp", subCategory: false
    },
    {
      id : 9 , categoryName : "Beauty, Toys & More", categoryImage : "assets/Toys.webp", subCategory: true
    },
    {
      id : 10 , categoryName : "Two Wheelers", categoryImage : "assets/TwoWheelers.webp", subCategory: true
    }
  ]
}
