import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrocasDoacoesComponent } from './home-trocas-doacoes.component';

describe('HomeTrocasDoacoesComponent', () => {
  let component: HomeTrocasDoacoesComponent;
  let fixture: ComponentFixture<HomeTrocasDoacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTrocasDoacoesComponent]
    });
    fixture = TestBed.createComponent(HomeTrocasDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
