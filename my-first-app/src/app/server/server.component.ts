import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverID:Number =  3;
    serverStatus:String = ''

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        if(this.serverStatus == 'Online')
            return 'red'
        else
            return 'green'
    }
}