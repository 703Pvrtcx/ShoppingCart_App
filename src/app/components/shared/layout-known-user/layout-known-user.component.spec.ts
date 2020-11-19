import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutKnownUserComponent } from './layout-known-user.component';

describe('LayoutKnownUserComponent', () => {
  let component: LayoutKnownUserComponent;
  let fixture: ComponentFixture<LayoutKnownUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutKnownUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutKnownUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
