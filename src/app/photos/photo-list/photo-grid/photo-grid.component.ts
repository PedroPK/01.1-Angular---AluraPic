import { Component, Input, OnChanges, OnInit, SimpleChanges }	from '@angular/core';

import { Photo }					from '../../photo/photo';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
// This component is now the responsible to receive a Photo array from PhotoList component, and display it in a Grid
export class PhotoGridComponent implements OnChanges {

	@Input() photos:	Photo[] =	[];
	rows:				any[]	=	[];

	constructor() {}
	ngOnChanges(changes: SimpleChanges): void {
		if ( changes['photos'] ) {
			this.rows = this.groupColumns(this.photos);
		}
	}

	groupColumns(photos: Photo[]): any[] {
		const photoRows	=	[];
		for (let index = 0; index < photos.length; index = index + 3) {
			// Add a new row of Photos, with 3 at a time
			photoRows.push(
				// Will get 3 Photos at a time
				photos.slice(index, index + 3)
			);
		}

		return photoRows
	}



}
