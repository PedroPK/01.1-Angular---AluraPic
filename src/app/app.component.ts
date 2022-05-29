import { HttpClient }	from '@angular/common/http';
import { Component }	from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Alura Pic';
	photos: any[] = [];

	constructor(private service: PhotoService) {
		this.service.listFromUser('flavio')
			.subscribe( // Observable is a Lazy object. It will not access the URL unless there is an Observer.
				photos => {
					console.log(photos)
					this.photos = photos
				}
			); 
	}

	
}
