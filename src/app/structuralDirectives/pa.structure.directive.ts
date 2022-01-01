import { Directive, Input, SimpleChange, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[paIf]'
})
export class PaStructureDirective {
  //The ViewContainerRef object is used to manage the contents of the view container, which is the part of the HTML document
  //where the ng-template element appears and for which the directive is responsible
  //The ViewContainerRef object represents the place in the HTML document occupied by the ng-template element,
  // and the TemplateRef object represents the ng-template element’s conten
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
    this.showControl = true;
  }
  @Input("paIf")
  showControl: Boolean;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["showControl"];
    if (!change.isFirstChange && !change.currentValue) {
      this.container.clear();
    }
    else {
      this.container.createEmbeddedView(this.template);
    }
  }
}
