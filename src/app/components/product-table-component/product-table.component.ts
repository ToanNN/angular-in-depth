import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'products-table',
  templateUrl: 'product-table.component.html',
})
export class ProductTableComponent {
  constructor(private model: Model) { }
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  deleteProduct(key: number | undefined) {
    key = key || 0;
    this.model.deleteProduct(key);
  }
  taxRate: number = 0;
  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = '2020-02-20T00:00:00.000Z';
  dateNumber: number = 1582156800000;
  selectMap = {
    Watersports: 'stay dry',
    Soccer: 'score goals',
    other: 'have fun',
  };
  numberMap = {
    '=1': 'one product',
    '=2': 'two products',
    other: '# products',
  };
}
