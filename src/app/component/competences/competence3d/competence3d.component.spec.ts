import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competence3dComponent } from './competence3d.component';

describe('Competence3dComponent', () => {
  let component: Competence3dComponent;
  let fixture: ComponentFixture<Competence3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Competence3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Competence3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
