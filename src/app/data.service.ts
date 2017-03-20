import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()
export class DataService {

  	constructor(private http: Http) 
  	{}
  	firstHttp()
  	{
  		return this.http.get('http://kishoresakat.fluxbase.com/api/auth').subscribe((data) => console.log(data));
  	}
  	firstPost(data)
  	{
  		var json = JSON.stringify(data);
  		var headers = new Headers();
  		headers.append('Content-Type', 'application/json');

  		return this.http.post('http://kishoresakat.fluxbase.com/api/auth/login', json, {headers: headers}).map(res => res.json());
  	}
    getData() 
    {
      var json = JSON.stringify({
        "conditions": [],
        "pageSize": 100,
        "pageNumber": 1,
        "orderBy": "FirstName",
        "includeReferences": false,
        "asFile": false,
        "columns": []
      });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

      return this.http.post('http://kishoresakat.fluxbase.com/api/Employes/query?token=' + Cookie.get('token'), json, { headers: headers }).map(res => res.json());
    }
    deleteEmp(id)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("http://kishoresakat.fluxbase.com/api/Employes/" + id + "?token=" + Cookie.get('token'), { headers: headers }).map(res => res.json());
    }
    addEmploye(data) 
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://kishoresakat.fluxbase.com/api/Employes?token=' + Cookie.get('token'), data, { headers: headers }).map(res => res.json());
    }
}
