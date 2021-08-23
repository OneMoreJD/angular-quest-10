import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
