import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  template: 'Hello details{{id}}',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

	public id: number;
	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		// subscribe to router event
		this.activatedRoute.params.subscribe((params: Params) => {
			let userId = params['id'];
			this.id = userId;
		});
	}

}
