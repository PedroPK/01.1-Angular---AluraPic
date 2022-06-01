import { Component, OnDestroy, OnInit }		from '@angular/core';
import { ActivatedRoute }			from '@angular/router';
import { debounceTime, Subject }	from 'rxjs';
import { Photo }					from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
// Now this Component is responsible only to consume Service and Store the Photo array
export class PhotoListComponent implements OnInit  {
								// avoid any runtime error if ngOnInit() is not defined correctly
	photos: Photo[] = [];
	filterOutput: string	= '';

	

	// Attribute to load more photos, if there is any
	hasMorePhotos:	boolean			=	true;
	
	// Current Page Number of Pagination
	currentPage:	number			=		1;

	// Username that 
	userName:		string			=		''

	// Using the Constructor only for Dependence Injections
	constructor(
		private activatedRoute:	ActivatedRoute,
		private service:		PhotoService
	) {}
	
	// Any setup needed its going to be done here
	// Phase On Init occurs after Instacialization and after this component receive the Inbound properties.
	ngOnInit(): void {
		/*
		Replacing the Service consumption to consume the PhotoListResolver.
		Now we are retrieving final data to PhotoList Template, with Filter applyed a priori, 
		without the need to load all data and then refresh the Template moments after Filter execute
		*/
		this.photos		=	this.activatedRoute.snapshot.data['photos'];

		this.userName	=	this.activatedRoute.snapshot.params['userName'];
	}
	
	load() {
		this.currentPage = this.currentPage + 1;
		this.filterOutput = '';
		this.service
			.listFromUserPaginated(this.userName, this.currentPage)
			.subscribe(
				photos =>
				{
					this.photos = this.photos.concat(photos);
					if ( !photos.length ) {
						this.hasMorePhotos = false;
					}
				}
			);
	}

}
