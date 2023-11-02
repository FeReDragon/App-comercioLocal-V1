import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComercioComponent } from './home-comercio.component';

describe('HomeComercioComponent', () => {
  let component: HomeComercioComponent;
  let fixture: ComponentFixture<HomeComercioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComercioComponent]
    });
    fixture = TestBed.createComponent(HomeComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
