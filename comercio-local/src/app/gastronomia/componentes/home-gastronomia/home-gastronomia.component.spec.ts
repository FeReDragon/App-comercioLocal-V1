import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGastronomiaComponent } from './home-gastronomia.component';

describe('HomeGastronomiaComponent', () => {
  let component: HomeGastronomiaComponent;
  let fixture: ComponentFixture<HomeGastronomiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGastronomiaComponent]
    });
    fixture = TestBed.createComponent(HomeGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
