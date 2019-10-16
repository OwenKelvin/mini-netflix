import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { membersRouterConfig } from './members.cofig';


const routes: Routes = membersRouterConfig;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
