import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelComponent } from './model/model.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const appRoutes: Routes = [
  { path: 'login', component: BookFormComponent},
  { path: '', component: BookFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empDetails/:id', component: EmpDetailsComponent },
  { path: 'addEmploye', component: NewEmployeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    DashboardComponent,
    ModelComponent,
    NewEmployeComponent,
    EmpDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),//useHash for not getting 404 when page reload
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
