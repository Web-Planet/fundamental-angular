import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Anak2Component} from './anak2.component';

describe('Anak2Component', () => {
  let component: Anak2Component;
  let fixture: ComponentFixture<Anak2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anak2Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anak2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
