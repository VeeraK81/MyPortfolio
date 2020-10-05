import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupElementComponent } from './dialog-popup-element.component';

describe('DialogPopupElementComponent', () => {
  let component: DialogPopupElementComponent;
  let fixture: ComponentFixture<DialogPopupElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPopupElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPopupElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
