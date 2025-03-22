import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencemontageComponent } from './competencemontage.component';

describe('CompetencemontageComponent', () => {
  let component: CompetencemontageComponent;
  let fixture: ComponentFixture<CompetencemontageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencemontageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencemontageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
