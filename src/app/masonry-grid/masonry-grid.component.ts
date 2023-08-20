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
  loading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, this.perPage).subscribe((data: any) => {
      this.loading = true;
      this.products = data.data.data;
      this.loading = false;
    });
  }

  searchQuery: string = '';
  filteredProducts: any[] = [];

  searchProducts() {
    this.loading = true;
    if (this.searchQuery.trim() === '') {
      this.currentPage = 1;
      this.loadProducts();
      return;
    }
    this.productService.searchProducts(this.searchQuery).subscribe((data: any) => {
      this.currentPage = 1;
      this.filteredProducts = data.data;
    });
    this.loading = false
  }

  resetSearch(): void {
    this.searchQuery = '';
    this.currentPage = 1;
    this.filteredProducts = []
    this.loadProducts();
  }

  changePage(offset: number): void {
    this.currentPage += offset;
    this.loadProducts();
  }
}