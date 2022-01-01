import { Component } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
  selector: "discount-editor",
  template: `<div class="form-group">
  <label>Discount</label>
  <input [(ngModel)]="discountService.discount"
       class="form-control" type="number" />
</div>`
})
export class DiscountEditorComponent {
  constructor(public discountService: DiscountService) { }
}
