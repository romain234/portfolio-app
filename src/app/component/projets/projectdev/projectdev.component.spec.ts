import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdevComponent } from './projectdev.component';

describe('ProjectdevComponent', () => {
  let component: ProjectdevComponent;
  let fixture: ComponentFixture<ProjectdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectdevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
