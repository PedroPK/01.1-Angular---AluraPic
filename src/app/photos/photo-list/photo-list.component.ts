import { Component, Input, OnInit }	from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo }				from '../photo/photo';
import { PhotoService }			from '../photo/photo.service';

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
		private service:		PhotoService,
		private activatedRoute:	ActivatedRoute
	) {}
	
	// Any setup needed its going to be done here
	// Phase On Init occurs after Instacialization and after this component receive the Inbound properties.
	ngOnInit(): void {
		const userName = this.activatedRoute.snapshot.params['userName'];
		//console.log(userName);

		this.service.listFromUser(userName)
			.subscribe(
				// Observable is a Lazy object. It will not access the URL unless there is an Observer.
				photos => {
					//console.log(photos);
					//console.log(photos[0].description);
					this.photos = photos;
				}
			);
	}

}
