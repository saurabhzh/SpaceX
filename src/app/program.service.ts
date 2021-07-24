import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProgramService {

	baseUrl: string = 'https://api.spaceXdata.com/v3/launches?limit=100';

	constructor(private http: HttpClient) { }

	getPrograms(launchYear?: number, launched? : boolean, landed?: boolean): Observable<any> {
		let url = this.baseUrl;
		if (launched) {
			url += '&launch_success=true';
		}
		if (landed) {
			url += '&land_success=true';
		}
		if (launchYear) {
			url += `&launch_year=${launchYear}`;
		}
		return this.http.get<any>(url);
	}
}