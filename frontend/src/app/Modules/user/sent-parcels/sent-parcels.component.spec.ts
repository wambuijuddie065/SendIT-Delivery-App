import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentParcelsComponent } from './sent-parcels.component';

describe('SentParcelsComponent', () => {
  let component: SentParcelsComponent;
  let fixture: ComponentFixture<SentParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
