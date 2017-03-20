import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [DataService]
})
export class BookFormComponent implements OnInit 
{
	model = new Book(1,'kishoresakat@sparshcom.net','Sparsh123#') ; 
	constructor(private dataservice: DataService, private router: Router) 
	{
		if (Cookie.get('token') != null)
		{
			this.router.navigateByUrl('dashboard');
		}
	}
  	ngOnInit() {}
  	login(data)
  	{
  		this.dataservice.firstPost(data).subscribe((data) => this.postData(data));
  	}
	postData(data) 
	{
		if (data.success == true) 
		{
			Cookie.set('token', data.result.token);
			this.router.navigateByUrl('dashboard');
		}
		else 
		{
			this.router.navigateByUrl('login');
		}

	}
}
