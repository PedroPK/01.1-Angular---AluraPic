import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn:	'root'
})
export class PhotoService {
	
	photos: any[] = [];
	URL: string = 'http://localhost:3000';

	constructor(
		private http: HttpClient
	) {
	}

	listFromUser(userName: string): Observable<Object[]> {
		let result: Observable<Object[]>;
		result = 
			this.http
				.get<Object[]>(this.URL + `/${userName}/photos`);
		
		return result;
	}

}