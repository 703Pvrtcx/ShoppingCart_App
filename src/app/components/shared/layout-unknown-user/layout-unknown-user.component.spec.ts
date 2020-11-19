import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUnknownUserComponent } from './layout-unknown-user.component';

describe('LayoutUnknownUserComponent', () => {
  let component: LayoutUnknownUserComponent;
  let fixture: ComponentFixture<LayoutUnknownUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUnknownUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUnknownUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
