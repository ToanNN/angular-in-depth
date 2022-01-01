import { Component } from "@angular/core";
import { DiscountService } from "./discount.service";
@Component({
  selector: "discount-display",
  template: `<div class="bg-info text-white p-2">
                The discount is {{discounter.discount}}
               </div>`
})
export class PaDiscountDisplayComponent {
  constructor(public discounter: DiscountService) { }
}
