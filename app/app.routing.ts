import { RouterModule, Routes } from '@angular/router'; 
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';
import{VerifyPhone} from './phone.verify.component'

const appRoutes: Routes = [
	 // path: 'login', component: LoginComponent },
	// { path: 'items', component: ItemsComponent }	
	// {path:'', component:AppComponent},
	{ path : 'home', component:HomeComponent },
	{path:'verifyphone', component:VerifyPhone},
	{ path : '', component:LoginComponent }
] 

export const routing = RouterModule.forRoot(appRoutes);