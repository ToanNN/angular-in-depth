import { ApplicationRef, Component } from "@angular/core";

import { Product } from "./model/product.model";
import { Model } from "./model/repository.model";
@Component({
  selector: "product-table",
  templateUrl: "product.component.html"
})
export class ProductComponent {
  model: Model = new Model();
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  selectedProduct: Product | undefined;
}
