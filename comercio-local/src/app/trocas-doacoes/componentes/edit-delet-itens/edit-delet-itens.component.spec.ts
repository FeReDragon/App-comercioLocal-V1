import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletItensComponent } from './edit-delet-itens.component';

describe('EditDeletItensComponent', () => {
  let component: EditDeletItensComponent;
  let fixture: ComponentFixture<EditDeletItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDeletItensComponent]
    });
    fixture = TestBed.createComponent(EditDeletItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
