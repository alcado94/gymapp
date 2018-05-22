import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsInfoComponent } from './highlights-info.component';

describe('HighlightsInfoComponent', () => {
  let component: HighlightsInfoComponent;
  let fixture: ComponentFixture<HighlightsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
