import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

	@Input() brightness	=	'70%';


	constructor(
		// Refenrence to the Element/Selector/Tag where the this Directive was placed on
		private el: 	ElementRef,

		// Allows us to handle DOM at Server side, even aparted from Client side
		private render: Renderer2
	) {
	
	}

	// 				Event to be listened. Becarefull, it's case sensitive
	@HostListener('mouseover')
	darkenOn() {
		this.render.setStyle(
			this.el.nativeElement, 				// Element
			'filter', 							// CSS Style to be modified
			`brightness(${this.brightness})`);	// Value of Style
		}
		
		// 				Its case sensitive
		@HostListener('mouseleave')
		darkenOff() {
			this.render.setStyle(
				this.el.nativeElement, 
				'filter', 
				'brightness(100%)');
	}
}