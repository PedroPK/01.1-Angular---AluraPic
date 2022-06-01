import { NgModule }				from '@angular/core';
import { CommonModule }			from '@angular/common';

import { PhotoModule }			from '../photo/photo.module';
import { PhotoGridComponent }	from './photo-grid/photo-grid.component';
import { PhotoListComponent }	from './photo-list.component';
import { FilterByDescription }	from './filter-by-description.pipe';
import { LoadButtonComponent }	from './load-button/load-button.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
	declarations:[
		PhotoListComponent,
		PhotoGridComponent,
		FilterByDescription,
		LoadButtonComponent,
		SearchComponent
	],
	imports:[
		CommonModule,
		PhotoModule,
		CardModule
	]
})
export class PhotoListModule {}