import { Attribute, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[pa-sw]",
})
export class ProductAttributeSuccessWhiteText {

  @Input("pa-sw")
  hostClass: string;

  constructor(private element: ElementRef) {
    this.hostClass = "";
  }

  ngOnInit() {
    this.element.nativeElement.classList.add(this.hostClass || "bg-success", "text-white")
  }

}
