import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  ngOnInit() {
  }

}
