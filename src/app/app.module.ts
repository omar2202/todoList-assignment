import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Situation } from './situation/situation.component';
import { AddComponent } from './add-todo/add.component';


@NgModule({
  declarations: [
    AppComponent,
    Situation,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
