import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {



@Input()
  appMask :string='';


  maskData :string='********';

  originalData:string='';

  constructor(private eleRef: ElementRef) {
    console.log(' From MaskDirective ');
   }


@HostListener("mouseenter")
  mouseEnter(){
    console.log(" Enter into the mouse enter method ");
    this.appMask=this.originalData;
    this.eleRef.nativeElement.value=this.appMask;

  }
@HostListener("mouseleave")
  mouseOut(){
    
    this.maskData=this.appMask;
    this.appMask=this.maskData;
    console.log(" Enter into the mouseleave method originalData "+this.originalData);
    console.log(" Enter into the mouseleave method  appMask "+this.appMask);
    this.eleRef.nativeElement.value=this.appMask;


  }
  @HostListener("mouseover")
  mouseOver(){
    console.log(" Enter into the mouse over method ");


  }


}
