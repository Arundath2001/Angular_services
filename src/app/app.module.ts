import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskinsertComponent } from './taskinsert/taskinsert.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskdisplayComponent,
    TaskinsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
