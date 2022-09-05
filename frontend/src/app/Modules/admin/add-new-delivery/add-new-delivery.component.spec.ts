import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDeliveryComponent } from './add-new-delivery.component';

describe('AddNewDeliveryComponent', () => {
  let component: AddNewDeliveryComponent;
  let fixture: ComponentFixture<AddNewDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
