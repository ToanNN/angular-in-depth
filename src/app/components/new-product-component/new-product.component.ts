import { Component } from "@angular/core";
import { Product } from "src/app/model/product.model";
import { Model } from "src/app/model/repository.model";

@Component({
  selector: "new-product",
  templateUrl: "new-product.component.html"
})
export class NewProductComponent {
  newProduct: Product = new Product();
  constructor(private model: Model) { }

  submitForm(form: any) {
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }
}
