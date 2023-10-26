import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartserverComponent } from './startserver.component';

describe('StartserverComponent', () => {
  let component: StartserverComponent;
  let fixture: ComponentFixture<StartserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartserverComponent]
    });
    fixture = TestBed.createComponent(StartserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
