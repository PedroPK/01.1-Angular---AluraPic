import { Component, Input, OnInit }	from '@angular/core';
import { ActivatedRoute }			from '@angular/router';
import { Photo }					from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
// Now this Component is responsible only to consume Service and Store the Photo array
export class PhotoListComponent implements OnInit {
								// avoid any runtime error if ngOnInit() is not defined correctly
	photos: Photo[] = [];
	filter: string	= '';

	// Using the Constructor only for Dependence Injections
	constructor(
		private activatedRoute:	ActivatedRoute
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
	}

}
