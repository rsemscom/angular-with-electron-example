import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/landing/landing.component";


const routes:Routes = [
    {
        path: '',
        component: LandingComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class LandingRoutingModule { }
