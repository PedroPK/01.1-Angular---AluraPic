import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Alura Pic';

	constructor(httpClient: HttpClient) {
		console.log(httpClient);
	}

	photos = [
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sultan_the_Barbary_Lion.jpg',
			description: 'Leão da Barbária'
		}, 
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Okonjima_Lioness.jpg',
			description: 'Leoa de Okinjima'
		}, 
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Mountain_lion_Winter.jpg',
			description: 'Leão da Montanha'
		}, 
	];
}
