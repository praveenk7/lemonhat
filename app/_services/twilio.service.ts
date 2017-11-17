import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {User} from '../user'

@Injectable()
export class TwilioService{
    constructor(
        private http:Http,
        //private userObj:User
        //client:any
    ){}
    client:any;
    getToken(identity:string, endpointId:string){
        //request('/getToken?identity=' + identity + '&endpointId=' + endpointId, function(err, res) {
        //return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
        return this.http.get('/getToken?identity=' + identity + '&endpointId=' + endpointId).map((response:Response)=>{
            //console.log(response);
            return response;
        });
    }

    getPhoneVerificationToken(phoneNumber:string,countryCode:number){
        let postObj={"phone_number":phoneNumber, "country_code":countryCode}
        return this.http.post('/phoneVerification',postObj).map((response:Response)=>{
            //console.log(response);
            return response;
        });
    }

    verifyPhoneToken(otp:number,userObj:User){
        let postObj={"otp":otp, "phone_number":userObj.phone, "country_code":userObj.countryCode};
        return this.http.post('/verifyOTP',postObj).map((response:Response)=>{
            //console.log(response);
            return response;
        });
    }
   setTwilioClient(clientObj:any){
       this.client=clientObj;
   }

   getTwilioClient(){
       return this.client;
   }


    
}