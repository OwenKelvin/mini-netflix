import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authRouterConfig } from './auth.cofig';


const routes: Routes = authRouterConfig ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
