import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectnavComponent } from './projectnav.component';

describe('ProjectnavComponent', () => {
  let component: ProjectnavComponent;
  let fixture: ComponentFixture<ProjectnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
