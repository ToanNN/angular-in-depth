import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { ProductFormGroup } from "./reactive-form.model";

@Component({
  selector: 'reactive-product',
  templateUrl: "reactive-product.component.html"
})
export class ReactiveProductComponent {
  model: Model = new Model();
  productFormGroup: ProductFormGroup = new ProductFormGroup();
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  submittingForm: boolean = false;
  submitForm() {
    Object.keys(this.productFormGroup.controls)
      .forEach(c => this.newProduct[c] = this.productFormGroup.controls[c].value)
  }

  //structural directive
  showTable: boolean = false;

}
