import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators'
import {throwError, Subject, BehaviorSubject} from 'rxjs'
import { User } from './user.model';

export interface signUpResponse{
    email:string,
    localId:string,
    idToken:string,
    expiresIn:string
}

@Injectable({providedIn : 'root'})
export class AuthService{
    private AuthKey:string = 'AIzaSyA1iB7V0dYn4wtZEzQUk1zY84zmCXVDZm8';
    public userSubject = new BehaviorSubject<User>(null);
    public user : User = null;
    constructor(private http:HttpClient){}

    signUp(email:string, password : string){

        return this.http.post<signUpResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.AuthKey,
            {email : email,
            password : password,
            returnSecureToken : true})
            .pipe(catchError(errRes=>{
                let errorMsg = null;
                switch(errRes.error.error.message){
                    case "EMAIL_EXISTS":
                        errorMsg =  "Email id already exists"
                }
                return throwError(errorMsg)
            }),tap((resData)=>{
                console.log("signup \n",resData)
                this.user = new User(resData.email,resData.localId,resData.idToken,new Date().getTime()+(+resData.expiresIn))
                this.userSubject.next(this.user);
        }))
        
    }

    login(email:string,password : string){
        return this.http.post<signUpResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.AuthKey,
            {email : email,
            password : password,
            returnSecureToken : true})
            .pipe(tap((resData)=>{
                console.log("login \n",resData)
                this.user = new User(resData.email,resData.localId,resData.idToken,new Date().getTime()+(+resData.expiresIn))
                this.userSubject.next(this.user);
                localStorage.setItem('user',JSON.stringify(this.user))
            }))
    }

    autoLogin(){
        let data = localStorage.getItem('user')
        console.log('trying auto login')
        if(data){
            this.user = JSON.parse(data)
            console.log(this.user)
            this.userSubject.next(this.user);
        }else{
            this.user = null;
            this.userSubject.next(this.user);
        }
    }

    logout(){
        this.userSubject.next(null);
    }
}