import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  private userSubscription : Subscription;
  private user = null;
  private isAuthenticated = false;

  constructor(private dataStorageService : DataStorageService, private authService: AuthService, private router : Router) { }

  ngOnInit() {
    console.log("subscribing")
    this.userSubscription = this.authService.userSubject.subscribe((user)=>{
      this.user = user;
      console.log("subscribed")
      if(user)
        this.isAuthenticated = true;
    });
  }

  saveRecipes(){
    this.dataStorageService.storeRecipes(this.user._token)
  }

  fetchRecipes(){
    this.dataStorageService.fetchRecipes(this.user._token)
  }

  logout(){
    this.authService.logout();
    localStorage.removeItem('user');
    this.router.navigate(['/auth'])
    this.isAuthenticated = false;
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe()
  }

}
