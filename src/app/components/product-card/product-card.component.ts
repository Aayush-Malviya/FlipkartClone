import { Component, Input, OnInit} from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private ServicesService:ServicesService){}

  productdata = [...this.ServicesService.getProductData()];

  @Input() productCategory:any; 

  filteredData: any = [];
  filteringData(parm : string){
    this.filteredData = [];
    for(let i=0 ; i<this.productdata.length ;  i++){
      if(parm==this.productdata[i].category)
        this.filteredData.push(this.productdata[i]);
    }
    return this.filteredData;
  }
  
}
