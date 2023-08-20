import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGridComponent } from './masonry-grid.component';

describe('MasonryGridComponent', () => {
  let component: MasonryGridComponent;
  let fixture: ComponentFixture<MasonryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryGridComponent]
    });
    fixture = TestBed.createComponent(MasonryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
