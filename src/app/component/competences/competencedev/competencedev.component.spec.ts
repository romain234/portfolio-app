import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencedevComponent } from './competencedev.component';

describe('CompetencedevComponent', () => {
  let component: CompetencedevComponent;
  let fixture: ComponentFixture<CompetencedevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencedevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
