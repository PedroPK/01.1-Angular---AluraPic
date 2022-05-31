import { NgModule }				from '@angular/core';
import { CommonModule }			from '@angular/common';

import { PhotoModule }			from '../photo/photo.module';
import { PhotoGridComponent }	from './photo-grid/photo-grid.component';
import { PhotoListComponent }	from './photo-list.component';
import { FilterByDescription }	from './filter-by-description.pipe';
import { LoadButtonComponent }	from './load-button/load-button.component';

@NgModule({
	declarations:[
		PhotoListComponent,
		PhotoGridComponent,
		FilterByDescription,
		LoadButtonComponent
	],
	imports:[
		CommonModule,
		PhotoModule
	]
})
export class PhotoListModule {}