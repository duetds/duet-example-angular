import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { IndexPageComponent } from "./index-page/index-page.component"

const routes: Routes = [{ path: "", component: IndexPageComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
