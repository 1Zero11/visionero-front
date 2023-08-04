import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEntryComponent } from './history-entry.component';

describe('HistoryEntryComponent', () => {
  let component: HistoryEntryComponent;
  let fixture: ComponentFixture<HistoryEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryEntryComponent]
    });
    fixture = TestBed.createComponent(HistoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
