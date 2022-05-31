import { HttpClient, HttpParams }	from "@angular/common/http"
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

	listFromUserPaginated(userName: string, pageNumber: number):Observable<Photo[]> {
		let result:	Observable<Photo[]>;
		const parameter = new HttpParams().append('page', pageNumber.toString());

		result =
			this.http
				.get<Photo[]>(
					this.URL + `/${userName}/photos`, 
					{params: parameter});
		
		return result;
	}

}