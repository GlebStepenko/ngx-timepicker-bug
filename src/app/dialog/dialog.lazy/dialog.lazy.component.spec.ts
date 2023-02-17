import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLazyComponent } from './dialog.lazy.component';

describe('DialogLazyComponent', () => {
  let component: DialogLazyComponent;
  let fixture: ComponentFixture<DialogLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
