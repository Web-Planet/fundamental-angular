import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GrandCompComponent} from './grand-comp.component';

describe('GrandCompComponent', () => {
  let component: GrandCompComponent;
  let fixture: ComponentFixture<GrandCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
