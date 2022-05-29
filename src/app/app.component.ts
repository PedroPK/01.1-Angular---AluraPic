import { Component, OnInit }	from '@angular/core';

import { Photo } 				from './photos/photo/photo';
import { PhotoService } 		from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
							// avoid any runtime error if ngOnInit() is not defined correctly

	title = 'Alura Pic';

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
