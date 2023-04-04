import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'src/app/productData/data';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.scss'], 
})
export class SingleProductViewComponent implements OnInit {

  @Input() searchProductId: number = 0;
  id:number = 0;
  productDetails:any;
  constructor(private ServicesService:ServicesService, private route: Router ,private activeRoute: ActivatedRoute ) {
    
  }

  ngOnInit(): void {
    // console.log(this.searchProductId);
    this.id= Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.productDetails = data[this.id-1];
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

  addToCart(Id : number){
    this.ServicesService.addToCart(Id);
    this.ServicesService.raiseChangeInCoutEventEmitter(1); //passing temporary data just to raise the event
  }
  
}
