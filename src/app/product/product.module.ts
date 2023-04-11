import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

console.log("inside product module")
const routes: Routes = [
  {path: 'productDetails/:id', component: SingleProductViewComponent},
  {path: 'productList/:search', component: ProductListViewComponent},
];


@NgModule({
  declarations: [SingleProductViewComponent, ProductListViewComponent, ProductListItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [RouterModule, CommonModule]

})
export class ProductModule { }
