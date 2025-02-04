import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(parseInt(this.route.snapshot.params['id']));
    //we are loading component inside the same component with different data so we have to subscribe it
    this.route.params.subscribe((params)=>{
      this.server = this.serversService.getServer(parseInt(params['id']));
    })
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling : 'preserve'},)
  }

}
