import { Component, EventEmitter, Input, OnDestroy, OnInit, Output }	from '@angular/core';
import { debounceTime, Subject }		from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
	
	// Subject is a special type of Observable (and also an Observer), provided by RXJS
	// We feed a new value to the Subject invoking the next(), multicasting it to all Observers registered.
	debouncer:	Subject<string>		=	new Subject<string>();

	@Output() onType: EventEmitter<string> = new EventEmitter<string>();

	@Input() filterInput:	string	=	'';

	ngOnInit(): void {
		this.debouncer
			.pipe(debounceTime(500))
			// filter (not this.filter) is coming from the PhotoList Template (ilterByDescription: filter)
			.subscribe(
				//filter => this.filter = filter
				//filter => console.log(filter);
				filter => this.onType.emit(filter)
			);
	}
	
	ngOnDestroy(): void {
		// Stop the observation and freeing memory and processing time
		this.debouncer.unsubscribe();
	}

}