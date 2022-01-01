import { Pipe } from "@angular/core";
import { DiscountService } from "src/services/discount.service";

@Pipe({
  name: "discount",
  pure: false
})
export class PaDiscountPipe {
  constructor(private discount: DiscountService) { }
  transform(price: number): number {
    return this.discount.applyDiscount(price);
  }
}
