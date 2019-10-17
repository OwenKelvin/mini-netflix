import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { searchRouterConfig } from './search.cofig';


const routes: Routes = searchRouterConfig;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
