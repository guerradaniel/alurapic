import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => HomeModule)
	},
	{
		path: 'user/:userName',
		component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolver
		}
	},
	{
		path: 'p/add',
		component: PhotoFormComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	},

]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}