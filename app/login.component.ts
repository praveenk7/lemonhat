import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import {TwilioService} from './_services/twilio.service';

declare const Fingerprint2: any;
declare const Twilio: any;
@Component({
    moduleId: module.id,
    //selector: 'phone-verification',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 
    constructor(
        private twilioService:TwilioService,
        private route: ActivatedRoute,
        private router: Router) {};

    phone:string;
    twilioToken:string;
    client:any;
    countryCode:number
    login(){
        if(this.phone){
            this.countryCode=91;
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    "phone": this.phone,
                    "countryCode": this.countryCode
                }
            };
             this.twilioService.getPhoneVerificationToken(this.phone, this.countryCode).subscribe(
                 data=> {
                     let response = JSON.parse(data._body);
                     if (response.status == 200) {
                         this.router.navigate(['verifyphone'], navigationExtras);
                     }
                 }
             )
            
        }
    }
}