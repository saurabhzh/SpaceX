import { Component, OnInit } from '@angular/core';

import { ProgramService } from '../program.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	launchYears: number[] = [];
	launchYear: number = NaN;
	sucessLaunch: boolean = false;
	sucessLand: boolean = false;
	programs: any[] = [];

	constructor(readonly programService: ProgramService) { }

	ngOnInit(): void {
		this.launchYears = [];
		for (let i = 2006; i < 2021; i++) {
			this.launchYears.push(i);
		}
		this.getData();
	}

	getData(): void {
		this.programService.getPrograms(this.launchYear, this.sucessLaunch, this.sucessLand).subscribe(r => {
			this.programs = r;
		});
	}

	selectYear(year: number) {
		this.launchYear = (this.launchYear == year) ? NaN : year;
		this.getData();
	}

}