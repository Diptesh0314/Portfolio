import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPanelComponent } from './technology-panel.component';

describe('TechnologyPanelComponent', () => {
  let component: TechnologyPanelComponent;
  let fixture: ComponentFixture<TechnologyPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyPanelComponent]
    });
    fixture = TestBed.createComponent(TechnologyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
