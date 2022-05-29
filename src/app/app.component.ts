import { HttpClient }	from '@angular/common/http';
import { Component }	from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Alura Pic';
	photos: any[] = [];

	constructor(httpClient: HttpClient) {
		httpClient
			.get<Object[]>('http://localhost:3000/flavio/photos')
			.subscribe( // Observable is a Lazy object. It will not access the URL unless there is an Observer.
				photos => {
					console.log(photos)
					this.photos = photos
				}
			); 
	}

	
}
