import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {Ng2Webstorage} from 'ng2-webstorage';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/layout/header/header.component';
import {ProjectListComponent} from './auth/project-list/project-list.component';

import {ProjectListService} from './auth/project-list/services/project-list.service';
import {IssuesListService} from './auth/issues-list/services/issues-list.service';
import {IssuesListComponent} from './auth/issues-list/issues-list.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {SortingComponent} from './common/sorting/sorting.component';
import {GroupingComponent} from './common/grouping/grouping.component';
import {NewProjectComponent} from './auth/project-list/new-project/new-project.component';
import {NewIssueComponent} from './auth/issues-list/new-issue/new-issue.component';
import {HttpService} from './common/services/http.service';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderComponent} from './common/loader/loader.component';
import {CanActivateGuard} from 'app/can-activate.guard';
import {AuthenticationService} from './common/services/authentication.service';
import {LoginComponent} from './public/login/login.component';
import {NoAuthGuard} from './no-auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [NoAuthGuard]
  },
  {
    path: 'home', component: HomeComponent, data: {name: 'Home'}, canActivate: [CanActivateGuard]
  }, {
    path: 'proyectos', component: ProjectListComponent, data: {name: 'Proyectos'}, canActivate: [CanActivateGuard]
  },
  {
    path: 'issues', component: IssuesListComponent, data: {name: 'Issues'}, canActivate: [CanActivateGuard]
  },
  {
    path: 'proyectos/nuevo',
    component: NewProjectComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'issues/nuevo',
    component: NewIssueComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    IssuesListComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent,
    GroupingComponent,
    NewProjectComponent,
    NewIssueComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    JasperoAlertsModule,
    Ng2Webstorage
  ],
  providers: [ProjectListService, IssuesListService, HttpService, NoAuthGuard, CanActivateGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
