import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Anak3Component} from './anak3.component';

describe('Anak3Component', () => {
  let component: Anak3Component;
  let fixture: ComponentFixture<Anak3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anak3Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anak3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
