import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-holver.directive';


@NgModule({
	declarations: [
		DarkenOnHoverDirective
	],
	exports: [
		DarkenOnHoverDirective
	]
})
export class DarkenOnHoverModule {

}