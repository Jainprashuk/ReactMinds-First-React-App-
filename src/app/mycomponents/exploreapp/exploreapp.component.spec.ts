import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreappComponent } from './exploreapp.component';

describe('ExploreappComponent', () => {
  let component: ExploreappComponent;
  let fixture: ComponentFixture<ExploreappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreappComponent]
    });
    fixture = TestBed.createComponent(ExploreappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
