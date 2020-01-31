import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [2,4,6,8]
  oddNumbers = [1,3,5]
  onlyOdd:boolean = true;
  value = 10;

  toggleShowOdd(){
    if(this.onlyOdd)
      this.onlyOdd = false;
    else
      this.onlyOdd = true;
  }
}
