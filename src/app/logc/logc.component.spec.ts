import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcComponent } from './logc.component';

describe('LogcComponent', () => {
  let component: LogcComponent;
  let fixture: ComponentFixture<LogcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
