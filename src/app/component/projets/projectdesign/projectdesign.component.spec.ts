import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdesignComponent } from './projectdesign.component';

describe('ProjectdesignComponent', () => {
  let component: ProjectdesignComponent;
  let fixture: ComponentFixture<ProjectdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectdesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
