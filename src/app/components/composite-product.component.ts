import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
  selector: "composite-product",
  templateUrl: "composite-product.component.html"
})
export class CompositeProductComponent {

  constructor(public model: Model) { }
  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
}
