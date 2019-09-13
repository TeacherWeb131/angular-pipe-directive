import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[fluo]"
})
export class FluoDirective {
  @Input("fluo")
  color: string;

  defaultColor = "yellow";

  @HostBinding("class.bold")
  isBold = false;

  @HostBinding("value")
  @Input("model")
  valueText = "";

  @HostListener("mouseenter")
  rendreFluo() {
    this.isBold = true;
    this.element.nativeElement.style.backgroundColor =
      this.color || this.defaultColor;
  }

  @HostListener("mouseleave")
  retirerFluo() {
    this.isBold = false;
    this.element.nativeElement.style.backgroundColor = null;
  }

  constructor(private element: ElementRef<HTMLElement>) {}
}
