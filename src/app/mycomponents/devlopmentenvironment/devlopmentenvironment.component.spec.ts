import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopmentenvironmentComponent } from './devlopmentenvironment.component';

describe('DevlopmentenvironmentComponent', () => {
  let component: DevlopmentenvironmentComponent;
  let fixture: ComponentFixture<DevlopmentenvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevlopmentenvironmentComponent]
    });
    fixture = TestBed.createComponent(DevlopmentenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
