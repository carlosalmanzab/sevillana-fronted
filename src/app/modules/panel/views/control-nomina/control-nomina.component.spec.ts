import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNominaComponent } from './control-nomina.component';

describe('ControlNominaComponent', () => {
  let component: ControlNominaComponent;
  let fixture: ComponentFixture<ControlNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlNominaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
