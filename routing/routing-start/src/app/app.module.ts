import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate.service';
import { ErrorComponent } from './error/error.component';

const appRoutes : Routes = [
  {path:'', component : HomeComponent},
  {path:'users', component : UsersComponent,children:[
    {path:':id/:name',component : UserComponent}
  ]},
  {path:'servers',
    //canActivate:[AuthGaurd]
    canActivateChild:[AuthGaurd], component: ServersComponent,children:[
    {path:':id',component: ServerComponent},
    {path:':id/edit',canDeactivate:[CanDeactivateGaurd], component: EditServerComponent}
  ]},
  //{path : 'not-found', component: PageNotFoundComponent},
  {path : 'not-found', component: ErrorComponent, data:{message : 'Page not found'}},
  {path : '**', redirectTo:'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, AuthGaurd,AuthService, CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
