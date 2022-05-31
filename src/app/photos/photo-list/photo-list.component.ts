import { Component, OnDestroy, OnInit }		from '@angular/core';
import { ActivatedRoute }			from '@angular/router';
import { debounceTime, Subject }	from 'rxjs';
import { Photo }					from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
// Now this Component is responsible only to consume Service and Store the Photo array
export class PhotoListComponent implements OnInit, OnDestroy  {
								// avoid any runtime error if ngOnInit() is not defined correctly
	photos: Photo[] = [];
	filter: string	= '';

				// Subject is a special type of Observable (and also an Observer), provided by RXJS
				// We feed a new value to the Subject invoking the next(), multicasting it to all Observers registered.
	debouncer:	Subject<string>		=	new Subject<string>();

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
		
		this.debouncer
		.pipe(debounceTime(500))
					// filter (not this.filter) is coming from the PhotoList Template (ilterByDescription: filter)
		.subscribe(filter => this.filter = filter);
	}
	
	ngOnDestroy(): void {
		// Stop the observation and freeing memory and processing time
		this.debouncer.unsubscribe();
	}

}
