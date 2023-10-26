import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstreactappComponent } from './firstreactapp.component';

describe('FirstreactappComponent', () => {
  let component: FirstreactappComponent;
  let fixture: ComponentFixture<FirstreactappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstreactappComponent]
    });
    fixture = TestBed.createComponent(FirstreactappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
