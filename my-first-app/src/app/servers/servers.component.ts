import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isAddAllowd : boolean = false;
  serverCreationStatus : string = 'Server has not created yet!';
  serverName : string = '';
  serverCreated : boolean = false;
  servers = ['Test server 1','Test server 2']

  constructor() { 
    setTimeout(()=>{
      this.isAddAllowd = true;
    },2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server has created! with name : '+this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
