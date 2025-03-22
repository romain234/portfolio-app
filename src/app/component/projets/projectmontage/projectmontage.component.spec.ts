import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmontageComponent } from './projectmontage.component';

describe('ProjectmontageComponent', () => {
  let component: ProjectmontageComponent;
  let fixture: ComponentFixture<ProjectmontageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectmontageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectmontageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
