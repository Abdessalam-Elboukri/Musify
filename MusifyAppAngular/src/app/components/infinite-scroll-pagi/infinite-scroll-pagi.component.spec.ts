import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollPagiComponent } from './infinite-scroll-pagi.component';

describe('InfiniteScrollPagiComponent', () => {
  let component: InfiniteScrollPagiComponent;
  let fixture: ComponentFixture<InfiniteScrollPagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollPagiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollPagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
