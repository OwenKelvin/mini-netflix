import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewRouterConfig } from './view-movie.cofig';
import { HeaderComponent } from '../shared/header/header.component';


const routes: Routes = viewRouterConfig;

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
