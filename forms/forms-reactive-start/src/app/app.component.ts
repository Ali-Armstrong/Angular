import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm : FormGroup;
  forbiddenUserNames = ["chris","anna"];
  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userdata' : new FormGroup({
        'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
      }),
      'gender' : new FormControl('male')
    })
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  forbiddenNames(control : FormControl):{[s:string]:boolean}{
    if(this.forbiddenUserNames.indexOf(control.value)!=-1){
      return {'nameIsForbidden':true}
    }
    return null;
  }
}
