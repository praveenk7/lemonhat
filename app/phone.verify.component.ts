import { Component, OnInit } from '@angular/core';
import {TwilioService} from './_services/twilio.service';
import {Router,ActivatedRoute} from "@angular/router";
import {User} from './user';

declare const Fingerprint2: any;
declare const Twilio: any;
@Component({
    moduleId: module.id,
    //selector: 'app',
    templateUrl: 'phone.verify.component.html'
})
export class VerifyPhone{
    constructor(private twilioService:TwilioService,
    private route:ActivatedRoute,
    private router: Router,
    private userObj:User){
        this.route.queryParams.subscribe(params => {
            // this.phone = params["phone"];
            // this.countryCode = params["countryCode"];
            this.userObj.phone = params["phone"];
            this.userObj.countryCode = params["countryCode"];
        });
    }
    phone:string;  
    countryCode:number;
    otp:number;  
    twilioToken:string;
    client:any;    
    verify(){
        if(this.userObj.phone){

            this.twilioService.verifyPhoneToken(this.otp, this.userObj).subscribe(
                data=>{
                  new Fingerprint2().get((result, components) => {  
                 this.twilioService.getToken(this.userObj.phone,result).subscribe(                    
                    data=>{
                        this.twilioToken=data._body;
                        this.client = new Twilio.Chat.Client(data._body, { logLevel: 'debug' }); 
                        this.twilioService.setTwilioClient(this.client);
                        this.router.navigate(['home']);
                    }                  
               )
              });
                    //this.router.navigate(['home']);
                }
            )
        }
    }

}