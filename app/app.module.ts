import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
//routing
import {routing} from './app.routing';

//services
import {TwilioService} from './_services/twilio.service';
import {User} from './user';
//components
 import { AppComponent }  from './app.component';
 import { LoginComponent }  from './login.component';
 import { HomeComponent }  from './home.component';
 import{VerifyPhone } from './phone.verify.component';
import{ProfileComponent } from './profile.component';
import{ ItemComponent } from './item.component';
import { ShareComponent } from './share.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        VerifyPhone,
        HomeComponent,
        ItemComponent,
        ShareComponent,
        ProfileComponent     
    ],
    providers: [ 
        TwilioService,
        User    
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }