import { CommonModule } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, Input, NgModule, OnDestroy, Renderer2 } from "@angular/core";


type direction = "top" | "bottom" | "left" | "right";


@Directive( {
   selector: "[resizable]"
} )
export class ResizableDirective implements AfterViewInit, OnDestroy {
   @Input( "resizable" ) direction: direction;
   @Input() defaultColor: string = "inherit";
   @Input() highlightColor: string = "rgba(150,150,150)";
   @Input() activeColor: string = "rgba(200,200,200)";
   div: HTMLDivElement;
   ghostDiv: HTMLDivElement;
   mousedownListener: Function;
   mousemoveListener: Function;
   mouseupListener: Function;
   mouseenterListener: Function;
   mouseoutListener: Function;
   hostResize: Function;

   constructor ( public elementRef: ElementRef<Element>, public rd: Renderer2 ) { }
   ngAfterViewInit() {
      this.createMainDiv();
      this.createEvents();
   }
   createMainDiv() {
      const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
      this.div = this.rd.createElement( "div" );

      this.rd.setStyle( this.div, "position", "absolute" );
      this.rd.setStyle( this.div, "background-color", this.defaultColor );
      this.rd.setStyle( this.div, this.direction, "0" );

      switch ( this.direction ) {
         case "left" || "right":
            // this.rd.setStyle( this.div, "height", hostRect.height + "px" );
            this.rd.setStyle( this.div, "height", "100%" );
            this.rd.setStyle( this.div, "width", "0.2rem" );
            this.rd.setStyle( this.div, "cursor", "ew-resize" );
            break;

         default:
            // this.rd.setStyle( this.div, "width", hostRect.width + "px" );
            this.rd.setStyle( this.div, "width", "100%" );
            this.rd.setStyle( this.div, "height", "0.2rem" );
            this.rd.setStyle( this.div, "cursor", "ns-resize" );
      }

      this.rd.appendChild( this.elementRef.nativeElement, this.div );
   }
   createEvents() {
      // this.createResize();
      this.createMousedown();
      this.createMouseenter();
      this.createMouseout();
   }
   createResize() {
      // this.hostResize = this.rd.listen( window, "resize", () => {
      //    console.log( "shit getting resized motherfucker" );

      // } );
   }
   createMousedown() {
      this.mousedownListener = this.rd.listen( this.div, "mousedown", () => {
         this.createMouseup();
         this.createMousemove();
         this.createGhostDiv();
      } );
   }
   createMouseup() {
      this.mouseupListener = this.rd.listen( window, "mouseup", ( e: MouseEvent ) => {
         this.rd.removeChild( this.div, this.ghostDiv );
         this.rd.setStyle( this.div, "background-color", this.defaultColor );

         const mouseX = e.clientX;
         const mouseY = e.clientY;
         const hostRect = this.elementRef.nativeElement.getBoundingClientRect();

         switch ( this.direction ) {
            case "left" || "right":
               const newWidth = hostRect.right - mouseX;
               this.rd.setStyle( this.elementRef.nativeElement, "width", newWidth + "px" );
               break;

            default:
               const newHeight = hostRect.bottom - mouseY;
               this.rd.setStyle( this.elementRef.nativeElement, "height", newHeight + "px" );
         }

         this.mousemoveListener();
         this.mouseupListener();
      } );
   }
   createMousemove() {
      this.mousemoveListener = this.rd.listen( window, "mousemove", ( e: MouseEvent ) => {
         e.preventDefault();
         if ( e.buttons != 1 ) { this.mousemoveListener(); this.mouseupListener(); }

         switch ( this.direction ) {
            case "left" || "right":
               this.rd.setStyle( this.ghostDiv, this.direction, e.clientX + "px" );
               break;
            default:
               this.rd.setStyle( this.ghostDiv, this.direction, e.clientY + "px" );
         }
      } );
   }
   createGhostDiv() {
      const divRect = this.div.getBoundingClientRect();
      this.ghostDiv = this.rd.createElement( "div" );
      this.rd.setStyle( this.ghostDiv, "position", "fixed" );
      this.rd.setStyle( this.ghostDiv, "height", divRect.height + "px" );
      this.rd.setStyle( this.ghostDiv, "user-select", "none" );
      this.rd.setStyle( this.ghostDiv, "width", divRect.width + "px" );
      this.rd.setStyle( this.ghostDiv, "background-color", this.activeColor );
      this.rd.appendChild( this.div, this.ghostDiv );
   }
   createMouseenter() {
      this.mouseenterListener = this.rd.listen( this.div, "mouseenter", () => {
         this.rd.setStyle( this.div, "background-color", this.highlightColor );
      } );
   }
   createMouseout() {
      this.mouseoutListener = this.rd.listen( this.div, "mouseout", () => {
         this.rd.setStyle( this.div, "background-color", this.defaultColor );
      } );
   }
   ngOnDestroy() {
      this.mousedownListener();
      this.mousemoveListener();
      this.mouseupListener();
      this.mouseenterListener();
      this.mouseoutListener();
   }
}


@NgModule( {
   imports: [ CommonModule ],
   declarations: [ ResizableDirective ],
   exports: [ ResizableDirective ]
} )
export class ResizableModule { }