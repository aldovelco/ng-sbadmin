import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbUiComponent } from './sb-ui.component';

describe('SbUiComponent', () => {
  let component: SbUiComponent;
  let fixture: ComponentFixture<SbUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
