import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencegraphismeComponent } from './competencegraphisme.component';

describe('CompetencegraphismeComponent', () => {
  let component: CompetencegraphismeComponent;
  let fixture: ComponentFixture<CompetencegraphismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencegraphismeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencegraphismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
