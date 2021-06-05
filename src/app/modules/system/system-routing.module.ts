import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "../../components/pages/home/home.component";
import {ContactComponent} from "../../components/pages/contact/contact.component";

const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
