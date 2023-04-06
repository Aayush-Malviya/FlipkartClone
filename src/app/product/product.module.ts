import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SingleProductViewComponent } from '../components/single-product-view/single-product-view.component';
import { ProductListViewComponent } from '../components/product-list-view/product-list-view.component';

console.log("inside product module")
const routes: Routes = [
  {path: 'productDetails/:id', component: SingleProductViewComponent},
  {path: 'productList/:search', component: ProductListViewComponent},
];


@NgModule({
  declarations: [SingleProductViewComponent, ProductListViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [RouterModule, CommonModule]

})
export class ProductModule { }
