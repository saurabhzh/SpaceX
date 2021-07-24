import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProgramService {

	baseUrl: string = 'https://api.spaceXdata.com/v3/launches?limit=100';
	url: string = '';

	constructor(private http: HttpClient) { }

	getPrograms(launchYear?: number, launched? : boolean, landed?: boolean): Observable<any> {
		this.url = this.baseUrl;
		if (launched) {
			this.url += '&launch_success=true';
		}
		if (landed) {
			this.url += '&land_success=true';
		}
		if (launchYear) {
			this.url += `&launch_year=${launchYear}`;
		}
		return this.http.get<any>(this.url);
	}
}