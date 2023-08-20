import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasonryGridComponent } from './masonry-grid/masonry-grid.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: MasonryGridComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
