import { Injectable,EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

export interface multiSelectResponse{
    result:{
        from : string[],
        to : string[]
    }
}

@Injectable({providedIn:'root'})
export class BlockChainServices{
    source : string[] = []
    destination : string[] = []
    selectedSource : string = null;
    selectedDestination : string = null;

    multiSelectUpdated = new EventEmitter<void>();

    constructor(private http:HttpClient){}
    
    getSourceAndDestinations(){
        this.http.get(environment.api+'/api/v1/swapDetails')
        .subscribe((data : multiSelectResponse)=>{
            this.source = data.result.from
            this.destination = data.result.to
            this.multiSelectUpdated.emit()
        })
    }
    
}