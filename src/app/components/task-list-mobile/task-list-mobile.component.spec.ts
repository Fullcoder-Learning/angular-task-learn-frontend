import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListMobileComponent } from './task-list-mobile.component';

describe('TaskListMobileComponent', () => {
  let component: TaskListMobileComponent;
  let fixture: ComponentFixture<TaskListMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
