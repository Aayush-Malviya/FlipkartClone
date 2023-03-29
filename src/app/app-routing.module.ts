import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { SingleProductViewComponent } from './components/single-product-view/single-product-view.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';


const routes: Routes = [
  // {path: '', component: ComponentsComponent},
  // {path: 'productList', component: ProductListViewComponent},
  // {path: 'productDetails/:id', component: SingleProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
