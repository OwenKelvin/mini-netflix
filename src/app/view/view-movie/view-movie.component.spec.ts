import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieComponent } from './view-movie.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouriteComponent } from 'src/app/shared/favourite/favourite.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/store/reducers';

describe('ViewMovieComponent', () => {
  let component: ViewMovieComponent;
  let fixture: ComponentFixture<ViewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        SharedModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer)
      ],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
