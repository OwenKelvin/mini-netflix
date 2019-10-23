import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesCarouselComponent } from './all-movies-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AllMoviesCarouselComponent', () => {
  let component: AllMoviesCarouselComponent;
  let fixture: ComponentFixture<AllMoviesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule, RouterTestingModule, NgbModule, HttpClientModule],
      declarations: [ AllMoviesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMoviesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
