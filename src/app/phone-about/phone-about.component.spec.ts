import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAboutComponent } from './phone-about.component';

describe('PhoneAboutComponent', () => {
  let component: PhoneAboutComponent;
  let fixture: ComponentFixture<PhoneAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
