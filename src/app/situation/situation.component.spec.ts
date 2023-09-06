import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Situation } from './situation.component';

describe('ItemComponent', () => {
  let component: Situation;
  let fixture: ComponentFixture<Situation>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Situation]
    });
    fixture = TestBed.createComponent(Situation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
