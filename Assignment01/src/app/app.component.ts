import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment01';
  id : number = 0;
  toggle : boolean = false;
  logs  = []

  onClickLogButton(){
    this.id++;
    this.logs.push(this.id);
    if (this.toggle)
      this.toggle = false;
    else
      this.toggle = true;
  }
}
