import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	year = 2018;

	constructor() { }

	ngOnInit() {
		const time = new Date;
		this.year = time.getFullYear();
	}

}
