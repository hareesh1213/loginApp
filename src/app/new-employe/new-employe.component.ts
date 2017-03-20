import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DataService } from '../data.service';
import { ModelComponent } from '../model/model.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-employe',
  templateUrl: './new-employe.component.html',
  styleUrls: ['./new-employe.component.css'],
  providers: [DataService, ModelComponent]
})
export class NewEmployeComponent implements OnInit 
{
	public form;
	public add = {};
	constructor(private router: Router, private dataservice: DataService, private modelcomponent: ModelComponent) 
	{
		if (Cookie.get('token') == null) 
		{
			this.router.navigateByUrl('login');
		}
	}
	ngOnInit() 
	{}
	postData(data, type)
	{
		switch (type) {
			case "addEmploye":
				console.log(data);
				if (data.success == true)
				{
					this.modelcomponent.onClick('Success', "Employee successfully created");
					this.add = {};
					this.form.resetForm();
				}
				else
				{
					this.modelcomponent.onClick('Failure', "Error:" + data.error+ "<br>ErrorType" + data.errorType);
				}
				break;
			
			default:
				// code...
				break;
		}
	}
	addEmploye(form: NgForm)
	{
		this.form = form;
		this.dataservice.addEmploye(this.add).subscribe((data) => this.postData(data, 'addEmploye'));
	}
	show_field(data)
	{
		console.log(data);
	}

}
