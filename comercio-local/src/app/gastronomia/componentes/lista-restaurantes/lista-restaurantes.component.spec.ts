import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRestaurantesComponent } from './lista-restaurantes.component';

describe('ListaRestaurantesComponent', () => {
  let component: ListaRestaurantesComponent;
  let fixture: ComponentFixture<ListaRestaurantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRestaurantesComponent]
    });
    fixture = TestBed.createComponent(ListaRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
