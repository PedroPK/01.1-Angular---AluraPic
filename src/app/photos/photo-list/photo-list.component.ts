import { Component, OnInit }	from '@angular/core';
import { Photo }				from '../photo/photo';
import { PhotoService }			from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
								// avoid any runtime error if ngOnInit() is not defined correctly
  photos: Photo[] = [];

	// Using the Constructor only for Dependence Injections
	constructor(private service: PhotoService) {
	}
	
	// Any setup needed its going to be done here
	// Phase On Init occurs after Instacialization and after this component receive the Inbound properties.
	ngOnInit(): void {
		this.service.listFromUser('flavio')
			.subscribe(
				// Observable is a Lazy object. It will not access the URL unless there is an Observer.
				photos => {
					console.log(photos);
					console.log(photos[0].description);
					this.photos = photos;
				}
			);
	}

}
