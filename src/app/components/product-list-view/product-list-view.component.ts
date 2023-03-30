import { Component, OnInit , Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import data from 'src/app/productData/data';
@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() searchResult: string = "";
  filteredData: any = [];          //setting type as object was giving erorr not able to access the attributes
  numberOfProducts:number = 0;
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteringData();
  }
  filteringData(){
    this.filteredData = [];
    console.log(this.searchResult);
    if(this.searchResult==""){
      this.filteredData = data; //copying data
    }
    else{
      this.searchResult = this.searchResult.toLowerCase();
      for(let i=0 ; i<data.length ;  i++){
        let temp = data[i].name.toLowerCase();
        if(temp.includes(this.searchResult))
          this.filteredData.push(data[i]);
      }
    }
    this.numberOfProducts = this.filteredData.length;
  }

  // 
  //   console.log("Original Data"+JSON.stringify(data[0].name))

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

  @Output()
  prodductListIDEventEmitter = new EventEmitter<number>();
  
  callSingleProductViewEventEmitter(Id:number){
    this.prodductListIDEventEmitter.emit(Id);
  }

  
}