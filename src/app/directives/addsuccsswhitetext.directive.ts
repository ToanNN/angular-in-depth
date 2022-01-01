import { Attribute, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChange } from "@angular/core";

import { Product } from "../model/product.model";

@Directive({
  selector: "[pa-sw]",
})
export class ProductAttributeSuccessWhiteText {

  @Input("pa-sw")
  @HostBinding("class")
  hostClass: string;

  @Input("pa-product")
  product: Product | undefined;

  @Output("pa-category")
  click = new EventEmitter<string>();
  constructor(private element: ElementRef) {
    this.hostClass = "";
    this.product = undefined;

  }

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }
  ngOnInit() {
    this.element.nativeElement.classList.add(this.hostClass || "bg-success", "text-white")
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["hostClass"];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }

    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }

}
