import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterTwoWayBindingComponent} from './counter-two-way-binding.component';

describe('CounterTwoWayBindingComponent', () => {
  let component: CounterTwoWayBindingComponent;
  let fixture: ComponentFixture<CounterTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterTwoWayBindingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
