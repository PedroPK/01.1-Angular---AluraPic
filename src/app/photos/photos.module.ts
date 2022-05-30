import { NgModule }				from '@angular/core';
import { CommonModule }			from '@angular/common';
import { HttpClientModule }		from '@angular/common/http';

import { PhotoComponent }		from './photo/photo.component';
import { PhotoListComponent }	from './photo-list/photo-list.component';
import { PhotoFormComponent }	from './photo-form/photo-form.component';
import { PhotoGridComponent } from './photo-list/photo-grid/photo-grid.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
	declarations: [
		PhotoComponent, 
		PhotoListComponent, 
		PhotoFormComponent, 
		PhotoGridComponent,
		FilterByDescription
	],
	exports: [PhotoComponent],
	imports: [
		HttpClientModule,
		CommonModule
	]
})
export class PhotosModule {

}