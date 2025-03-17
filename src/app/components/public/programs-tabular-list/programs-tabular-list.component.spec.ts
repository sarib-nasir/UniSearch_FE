import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsTabularListComponent } from './programs-tabular-list.component';

describe('ProgramsTabularListComponent', () => {
  let component: ProgramsTabularListComponent;
  let fixture: ComponentFixture<ProgramsTabularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsTabularListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsTabularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
