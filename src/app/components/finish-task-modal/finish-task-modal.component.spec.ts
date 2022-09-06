import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishTaskModalComponent } from './finish-task-modal.component';

describe('FinishTaskModalComponent', () => {
  let component: FinishTaskModalComponent;
  let fixture: ComponentFixture<FinishTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishTaskModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
