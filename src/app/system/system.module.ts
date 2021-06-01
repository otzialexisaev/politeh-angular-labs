import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import { SystemComponent } from './system.component';
import {HomeComponent} from "../home/home.component";
import {ContactComponent} from "../contact/contact.component";

@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModule{
}
