import { Attribute, Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[pa-sw]",
})
export class ProductAttributeSuccessWhiteText {
  constructor(element: ElementRef, @Attribute("host-class-value") hostClass: string) {
    element.nativeElement.classList.add(hostClass || "bg-success", "text-white");
  }
}
