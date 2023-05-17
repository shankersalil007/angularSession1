import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaiItemsListComponent } from './medai-items-list.component';

describe('MedaiItemsListComponent', () => {
  let component: MedaiItemsListComponent;
  let fixture: ComponentFixture<MedaiItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedaiItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedaiItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
