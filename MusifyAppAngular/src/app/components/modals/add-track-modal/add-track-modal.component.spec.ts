import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackModalComponent } from './add-track-modal.component';

describe('AddTrackModalComponent', () => {
  let component: AddTrackModalComponent;
  let fixture: ComponentFixture<AddTrackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrackModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
