import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[responsiveText]'
})
export class ResponsiveTextDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keydown') onKeyUp(): void {
    this.calculateFontSize();
  }

  private calculateFontSize(): void {
    const baseSize = 28;
    let textLength = this.el.nativeElement.textContent.length;

    if (textLength >= baseSize) {
      textLength = baseSize - 1;
    }
    const fontSize = baseSize - textLength;

    this.el.nativeElement.style.fontSize = `clamp(${fontSize / 5.75}vw, 2.5vw, 1.75rem)`;
  }
}
