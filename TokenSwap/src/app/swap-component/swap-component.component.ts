import { Component, OnInit } from '@angular/core';
import { BlockChainServices } from '../shared/block-chain-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-swap-component',
  templateUrl: './swap-component.component.html',
  styleUrls: ['./swap-component.component.css']
})
export class SwapComponent implements OnInit {

  constructor(private blockChainService : BlockChainServices, private route: ActivatedRoute, private router : Router) { }

  sourceLabel : string = "Source Block Chain Address"
  sourcePlaceHolder : string = ""
  destLabel : string = "Destination Block Chain Address"
  destPlaceHolder : string = ""

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      if(params.from == "ZPB ZEBI"){
        this.sourceLabel = "ZPB Account Address"
        this.destLabel = "Binance Account Address"
        this.sourcePlaceHolder = "zebifhtzccs30twn5cav9afdffxqjagt6r5z78z09q";
        this.destPlaceHolder = "tbnb1padr70ll229zf2lyt99ngcx593gelf2jk544hj";
      }else if(params.from == "BEP2 ZEBI"){
        this.destLabel = "ZPB Account Address"
        this.sourceLabel = "Binance Account Address"
        this.destPlaceHolder = "zebifhtzccs30twn5cav9afdffxqjagt6r5z78z09q";
        this.sourcePlaceHolder = "tbnb1padr70ll229zf2lyt99ngcx593gelf2jk544hj";
      }else{
        this.router.navigate(["/"])
      }
    })
  }

}
