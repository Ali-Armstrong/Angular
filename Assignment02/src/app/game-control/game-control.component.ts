import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();

  id : number = 0;
  myGame : any;
  constructor() { }

  ngOnInit() {
  }


  onStartGame(){
    this.myGame = setInterval(()=>{
      this.id++;
      this.gameStarted.emit(this.id);
    },1000);
  }

  onStopGame(){
    clearInterval(this.myGame);
  }

}
