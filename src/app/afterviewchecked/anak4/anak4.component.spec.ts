import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Anak4Component} from './anak4.component';

describe('Anak4Component', () => {
  let component: Anak4Component;
  let fixture: ComponentFixture<Anak4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anak4Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anak4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
