import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlockChainServices } from '../shared/block-chain-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-swap-select',
  templateUrl: './multi-swap-select.component.html',
  styleUrls: ['./multi-swap-select.component.css']
})
export class MultiSwapSelectComponent implements OnInit, OnDestroy {

  multiSelectChange : Subscription;
  from : string[] = [];
  to : string[] = [];
  to_temp : string[] = [];
  fromSelected : string = "Select"
  toSelected : string = "Select"

  constructor(private blockChainService:BlockChainServices, private router: Router) { }

  ngOnInit() {
    this.blockChainService.getSourceAndDestinations()
    this.multiSelectChange = this.blockChainService.multiSelectUpdated.subscribe(()=>{
      this.from = this.blockChainService.source;
      this.to = this.blockChainService.destination;
      this.to_temp = this.blockChainService.destination;
    })
  }

  fromValueSelected(value : string ){
    this.fromSelected = value
    this.toSelected = 'Select'
    this.to_temp = this.to
    this.to_temp = this.to.filter((val)=>{
      return val !== value
    })
    this.blockChainService.selectedSource = value;
  }

  toValueSelected(value : string ){
    this.toSelected = value
    this.blockChainService.selectedDestination = value;
  }

  continue(){
    this.router.navigate(["swap"],{queryParams : {from : this.fromSelected, to : this.toSelected}})
  }

  ngOnDestroy(){
    this.multiSelectChange.unsubscribe()
  }

}
