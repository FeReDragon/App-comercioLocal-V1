import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComerciosComponent } from './lista-comercios.component';

describe('ListaComerciosComponent', () => {
  let component: ListaComerciosComponent;
  let fixture: ComponentFixture<ListaComerciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComerciosComponent]
    });
    fixture = TestBed.createComponent(ListaComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
