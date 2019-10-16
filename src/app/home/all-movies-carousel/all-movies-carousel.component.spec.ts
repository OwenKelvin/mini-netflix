import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesCarouselComponent } from './all-movies-carousel.component';

describe('AllMoviesCarouselComponent', () => {
  let component: AllMoviesCarouselComponent;
  let fixture: ComponentFixture<AllMoviesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
