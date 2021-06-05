import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {WebstartComponent} from "./webstart.component";

const routes: Routes = [
  {path: 'webstart', component: WebstartComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebstartRoutingModule {
}
