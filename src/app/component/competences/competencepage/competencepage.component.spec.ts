import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencepageComponent } from './competencepage.component';

describe('CompetencepageComponent', () => {
  let component: CompetencepageComponent;
  let fixture: ComponentFixture<CompetencepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
