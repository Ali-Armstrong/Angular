import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = []
  oddNumbers = []
  
  startGame(id:number){
    if(id%2==0){
      this.evenNumbers.push(id)
    }else{
      this.oddNumbers.push(id)
    }
  }
}
