import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3dComponent } from './project3d.component';

describe('Project3dComponent', () => {
  let component: Project3dComponent;
  let fixture: ComponentFixture<Project3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Project3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
