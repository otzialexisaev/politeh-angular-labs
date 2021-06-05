import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import { SystemComponent } from './system.component';
import {HomeComponent} from "../../components/pages/home/home.component";
import {ContactComponent} from "../../components/pages/contact/contact.component";
import {SystemRoutingModule} from "./system-routing.module";
import {HeaderComponent} from "../../components/layout/header/header.component";
import {FooterComponent} from "../../components/layout/footer/footer.component";
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
