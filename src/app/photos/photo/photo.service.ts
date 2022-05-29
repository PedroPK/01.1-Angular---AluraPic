import { HttpClient }	from "@angular/common/http"
import { Injectable }	from "@angular/core";
import { Observable }	from "rxjs";
import { Photo }		from "./photo";

@Injectable({
	providedIn:	'root'
})
export class PhotoService {
	
	photos: Photo[] = [];
	URL: string = 'http://localhost:3000';

	constructor(
		private http: HttpClient
	) {
	}

	listFromUser(userName: string): Observable<Photo[]> {
		let result: Observable<Photo[]>;
		result = 
			this.http
				.get<Photo[]>(this.URL + `/${userName}/photos`);
		
		return result;
	}

}