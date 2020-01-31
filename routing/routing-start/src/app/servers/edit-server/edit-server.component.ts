import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactivateGaurd } from './can-deactivate.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGaurd {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedToEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(parseInt(this.route.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.allowedToEdit = this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowedToEdit){
      return true;
    }
    if(!this.changesSaved || this.serverName !== this.server.name || this.serverStatus !== this.server.status){
      return confirm('Do you want to discard the changes ? ')
    }else{
      return true;
    }
  }

}
