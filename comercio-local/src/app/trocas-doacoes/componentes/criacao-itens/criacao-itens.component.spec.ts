import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoItensComponent } from './criacao-itens.component';

describe('CriacaoItensComponent', () => {
  let component: CriacaoItensComponent;
  let fixture: ComponentFixture<CriacaoItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoItensComponent]
    });
    fixture = TestBed.createComponent(CriacaoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
