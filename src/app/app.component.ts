import { HttpClient }	from '@angular/common/http';
import { Component }	from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Alura Pic';
	photos: Photo[] = [];

	constructor(private service: PhotoService) {
		this.service.listFromUser('flavio')
			.subscribe( // Observable is a Lazy object. It will not access the URL unless there is an Observer.
				photos => {
					console.log(photos)
					console.log(photos[1].description)
					this.photos = photos
				}
			); 
	}

	
}
