import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaSenhaResetComponent } from './troca-senha-reset.component';

describe('TrocaSenhaResetComponent', () => {
  let component: TrocaSenhaResetComponent;
  let fixture: ComponentFixture<TrocaSenhaResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocaSenhaResetComponent]
    });
    fixture = TestBed.createComponent(TrocaSenhaResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
