import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaItemComponent } from './add-media-item.component';

describe('AddMediaItemComponent', () => {
  let component: AddMediaItemComponent;
  let fixture: ComponentFixture<AddMediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
