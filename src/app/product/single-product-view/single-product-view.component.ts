import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private ServicesService:ServicesService, private route: Router ,private activeRoute: ActivatedRoute ) {}

  productListCategories = [...this.ServicesService.getProductCategories()];

  ngOnInit(): void {
    this.id= Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.productDetails = this.ServicesService.getProductById(this.id-1);
  }

  addToCart(Id : number){
    this.ServicesService.addToCart(Id);
    this.ServicesService.raiseChangeInCoutEventEmitter(1); //passing temporary data just to raise the event
  }
  
}
