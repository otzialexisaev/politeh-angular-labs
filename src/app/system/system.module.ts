import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import { SystemComponent } from './system.component';
import {HomeComponent} from "../home/home.component";
import {ContactComponent} from "../contact/contact.component";
import {SystemRoutingModule} from "./system-routing.module";
import {HeaderComponent} from "../shared/component/header/header.component";
import {FooterComponent} from "../shared/component/footer/footer.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SystemRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModule{
}
