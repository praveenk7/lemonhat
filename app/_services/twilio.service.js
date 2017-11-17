"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TwilioService = /** @class */ (function () {
    function TwilioService(http) {
        this.http = http;
    }
    TwilioService.prototype.getToken = function (identity, endpointId) {
        //request('/getToken?identity=' + identity + '&endpointId=' + endpointId, function(err, res) {
        //return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
        return this.http.get('/getToken?identity=' + identity + '&endpointId=' + endpointId).map(function (response) {
            //console.log(response);
            return response;
        });
    };
    TwilioService.prototype.getPhoneVerificationToken = function (phoneNumber, countryCode) {
        var postObj = { "phone_number": phoneNumber, "country_code": countryCode };
        return this.http.post('/phoneVerification', postObj).map(function (response) {
            //console.log(response);
            return response;
        });
    };
    TwilioService.prototype.verifyPhoneToken = function (otp, userObj) {
        var postObj = { "otp": otp, "phone_number": userObj.phone, "country_code": userObj.countryCode };
        return this.http.post('/verifyOTP', postObj).map(function (response) {
            //console.log(response);
            return response;
        });
    };
    TwilioService.prototype.setTwilioClient = function (clientObj) {
        this.client = clientObj;
    };
    TwilioService.prototype.getTwilioClient = function () {
        return this.client;
    };
    TwilioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TwilioService);
    return TwilioService;
}());
exports.TwilioService = TwilioService;
//# sourceMappingURL=twilio.service.js.map