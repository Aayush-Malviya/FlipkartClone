import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import data from 'src/app/productData/data';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Output() productIdEmitter = new EventEmitter<number>();
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  productdata = [...data];

  filteredData: any = [];
  filteringData(parm : string){
    this.filteredData = [];
    for(let i=0 ; i<data.length ;  i++){
      if(parm==data[i].category)
        this.filteredData.push(data[i]);
    }
    return this.filteredData;
  }

  searchProduct(productId:number){
    this.productIdEmitter.emit(productId);
  }
  
}
