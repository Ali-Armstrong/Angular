import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector : 'app-auth',
    templateUrl : './auth.component.html'
})

export class AuthComponent{
    isLogin:boolean = true
    error :string = null;
    constructor(private authService: AuthService, private router: Router){}

    onAuthModeChange(){
        this.isLogin = !this.isLogin
    }

    onAuthFormSubmit(authForm : NgForm){
        if(!authForm.valid)
            return
        if(this.isLogin){
            this.authService.login(authForm.value.email,authForm.value.password)
                .subscribe((resData)=>{
                    this.router.navigate(['/recipes'])
                },err=>{
                    console.log("Error \n",err)
                    this.error = "Authentication failed, Please check your email and password"
                })
        }else{
            this.authService.signUp(authForm.value.email,authForm.value.password).subscribe((resData)=>{
                //console.log(resData)
                this.router.navigate(['/recipes'])
            },errMessage=>{
                this.error = errMessage
            })
        }
        authForm.reset()
    }
}