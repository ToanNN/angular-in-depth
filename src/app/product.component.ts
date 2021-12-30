import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Product } from "./model/product.model";
import { Model } from "./model/repository.model";
@Component({
  selector: "product-table",
  templateUrl: "product.component.html"
})
export class ProductComponent {
  constructor() {
    this.selectedProduct = undefined;
  }
  model: Model = new Model();
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return this.selectedProduct == product.name;
  }
  setSelectedProduct(target: EventTarget | null) {
    let htmlInput = target as HTMLInputElement;
    this.selectedProduct = htmlInput.value;
  }

  selectedProduct: string | undefined;

  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  getValidationMessages(state: any, elementName?: string) {
    elementName = state.path || elementName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${elementName}`);
            break;
          case 'minlength':
            messages.push(`A ${elementName} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case 'pattern':
            messages.push(`${elementName} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
  submittingForm: boolean = false;
  submitForm(form: NgForm) {
    this.submittingForm = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.submittingForm = false;
    }
  }
}
