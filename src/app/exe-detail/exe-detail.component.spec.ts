import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeDetailComponent } from './exe-detail.component';

describe('ExeDetailComponent', () => {
  let component: ExeDetailComponent;
  let fixture: ComponentFixture<ExeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExeDetailComponent]
    });
    fixture = TestBed.createComponent(ExeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
