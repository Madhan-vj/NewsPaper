import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopstoryComponent } from "./topstory/topstory.component";

const routes: Routes = [{
  path:'',
  component : TopstoryComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
