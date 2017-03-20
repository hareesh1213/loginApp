import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ModelComponent } from '../model/model.component';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService, ModelComponent]
})
export class DashboardComponent implements OnInit 
{
	public empData;
	constructor(private dataservice: DataService, public modelcomponent: ModelComponent, private router: Router) 
	{
		if (Cookie.get('token') == null) {
			this.router.navigateByUrl('login');
		}
		else
			this.getData(); 
	}
	ngOnInit() {}
	getData()
	{
		this.dataservice.getData().subscribe((data) => this.postData(data, 'empList'));
	}
	postData(data,type)
	{
		switch (type) 
		{
			case "empList":
				this.empData = data.result;
				console.log(this.empData);
				break;
			case "deleteEmp":
				if (data.success == true)
				{
					this.getData();
					this.modelcomponent.onClick('Acton status',"Employee successfully deleted");
				}
				else
				{
					console.log(data);
				}
				break;
			
			default:
				// code...
				break;
		}
	}
	deleteEmp(id)
	{
		this.dataservice.deleteEmp(id).subscribe((data) => this.postData(data, 'deleteEmp'));

	}
	logout()
	{
		Cookie.delete('token');
		this.router.navigateByUrl('login');
	}
}
