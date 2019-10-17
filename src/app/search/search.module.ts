import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './store/reducers';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    NgbAlertModule,
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducer),
    ReactiveFormsModule
  ]
})
export class SearchModule {}
