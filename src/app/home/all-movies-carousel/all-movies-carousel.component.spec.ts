import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesCarouselComponent } from './all-movies-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllMoviesCarouselComponent', () => {
  let component: AllMoviesCarouselComponent;
  let fixture: ComponentFixture<AllMoviesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule, RouterTestingModule],
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
