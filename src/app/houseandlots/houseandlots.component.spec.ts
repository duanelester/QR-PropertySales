import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseandlotsComponent } from './houseandlots.component';

describe('HouseandlotsComponent', () => {
  let component: HouseandlotsComponent;
  let fixture: ComponentFixture<HouseandlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseandlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseandlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
