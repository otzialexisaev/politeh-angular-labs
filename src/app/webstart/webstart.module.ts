import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import {WebstartComponent} from "./webstart.component";

@NgModule({
  declarations: [
    WebstartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebstartComponent]
})
export class WebstartModule {
}
