import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import {TwilioService} from './_services/twilio.service';

declare const Fingerprint2: any;
declare const Twilio: any;
@Component({
    moduleId: module.id,
    //selector: 'phone-verification',
    templateUrl: 'login.component.html'
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
            // this.twilioService.getPhoneVerificationToken(this.phone, this.countryCode).subscribe(
            //     data=>{
            //         this.router.navigate(['verifyphone'], navigationExtras);
            //     }
            // )
            this.router.navigate(['verifyphone'], navigationExtras);
            // new Fingerprint2().get((result, components) => {  
            //     this.twilioService.getToken(this.name,result).subscribe(                    
            //         data=>{
            //             this.twilioToken=data._body;
            //             this.client = new Twilio.Chat.Client(data._body, { logLevel: 'debug' }); 
            //             this.twilioService.setTwilioClient(this.client);
            //             this.router.navigate(['home']);
            //         }                  
            //    )
            //   });
        }
    }
}