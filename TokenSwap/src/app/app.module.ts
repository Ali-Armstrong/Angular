import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MultiSwapSelectComponent } from './multi-swap-select/multi-swap-select.component';
import { AppDropDown } from './shared/app-drop-down';
import { BlockChainServices } from './shared/block-chain-service';
import { SwapComponent } from './swap-component/swap-component.component';

const appRoutes: Routes = [
  { path: '', component: MultiSwapSelectComponent },
  { path: 'swap', component:  SwapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MultiSwapSelectComponent,
    AppDropDown,
    SwapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlockChainServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
