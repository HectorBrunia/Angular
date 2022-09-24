import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneHomeComponent } from './phone-home.component';

describe('PhoneHomeComponent', () => {
  let component: PhoneHomeComponent;
  let fixture: ComponentFixture<PhoneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
