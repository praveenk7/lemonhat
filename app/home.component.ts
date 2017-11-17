import { Component, OnInit } from '@angular/core';
import {TwilioService} from './_services/twilio.service';

@Component({
    moduleId: module.id,
    //selector: 'app',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    constructor(private twilioService:TwilioService){}
    client:any;
    //channelList:string[];
    subscribedChannels:any;
    ngOnInit() {
        this.loadChannels();//load chat lists
        
    }

    private loadChannels(){
        this.client=this.twilioService.getTwilioClient();
       this.client.getSubscribedChannels().then(
            channelList => {
                this.subscribedChannels = channelList.items.sort(function(a, b) {
                    return a.friendlyName > b.friendlyName;
                  })
              
                  this.subscribedChannels.forEach(channel=>{
                    switch (channel.status) {
                      case 'joined':
                        this.addJoinedChannel(channel);
                        break;
                      case 'invited':
                        this.addInvitedChannel(channel);
                        break;
                      default:
                        this.addKnownChannel(channel);
                        break;
               
    }
})

})
}

private addJoinedChannel(channel:Object){

}

private addInvitedChannel(channel:Object){

}

private addKnownChannel(channel:Object){

}
}