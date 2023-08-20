import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrls: ['./masonry-grid.component.css']
})
export class MasonryGridComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  perPage = 12;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, this.perPage).subscribe((data: any) => {
      this.products = data.data.data;
    });
  }

  searchQuery: string = '';
  filteredProducts: any[] = [];

  searchProducts() {
    if (this.searchQuery.trim() === '') {
      this.currentPage = 1;
      this.loadProducts();
      return;
    }
    this.productService.searchProducts(this.searchQuery).subscribe((data: any) => {
      this.currentPage = 1;
      this.filteredProducts = data.data;
    });
  }

  resetSearch(): void {
    this.searchQuery = '';
    this.currentPage = 1;
    this.loadProducts();
  }

  changePage(offset: number): void {
    this.currentPage += offset;
    this.loadProducts();
  }
}