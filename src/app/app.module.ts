import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoWrapperComponent } from './pages/create-bingo/component/bingo-wrapper/bingo-wrapper.component';
import { CreateBingoComponent } from './pages/create-bingo/create-bingo.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoWrapperComponent,
    CreateBingoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
