import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCartComponent } from './phone-cart.component';

describe('PhoneCartComponent', () => {
  let component: PhoneCartComponent;
  let fixture: ComponentFixture<PhoneCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
