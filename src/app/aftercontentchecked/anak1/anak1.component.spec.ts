import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Anak1Component} from './anak1.component';

describe('Anak1Component', () => {
  let component: Anak1Component;
  let fixture: ComponentFixture<Anak1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anak1Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anak1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
