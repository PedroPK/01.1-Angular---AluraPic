import { NgModule }					from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';

import { PathNotFoundComponent }	from './errors/path-not-found/path-not-found.component';
import { PhotoFormComponent } 		from './photos/photo-form/photo-form.component';
import { PhotoListComponent }		 from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
	{	path: 'user/:userName',	component: PhotoListComponent,		resolve: {	photos: PhotoListResolver}	},
	{	path: 'p/add',			component: PhotoFormComponent												},
	{	path: '**',				component: PathNotFoundComponent											}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
