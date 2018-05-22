import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsGrupalComponent } from './highlights-grupal.component';

describe('HighlightsGrupalComponent', () => {
  let component: HighlightsGrupalComponent;
  let fixture: ComponentFixture<HighlightsGrupalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsGrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
