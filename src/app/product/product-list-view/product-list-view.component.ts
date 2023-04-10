import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

  constructor(private route: Router ,private activeRoute: ActivatedRoute , private http : HttpClient, private ServicesService: ServicesService) { }

  searchResult:string="";
  filteredData: any = [];          //setting type as object was giving erorr not able to access the attributes
  numberOfProducts:number = 0;
  productData = [...this.ServicesService.getProductData()];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((temp) => {
      this.searchResult = temp.get('search') ?? "";
      this.filteringData();
    })
  }

  filteringData(){
    this.filteredData = [];
    if(this.searchResult==""){
      this.filteredData = this.productData; //copying data
    }
    else{
      this.searchResult = this.searchResult.toLowerCase();
      for(let i=0 ; i<this.productData.length ;  i++){
        let temp = (this.productData[i]).name.toLowerCase();
        if(temp.includes(this.searchResult))
          this.filteredData.push(this.productData[i]);
      }
    }
    this.numberOfProducts = this.filteredData.length;
  }

   productListCategories = [...this.ServicesService.getProductCategories()];

}
