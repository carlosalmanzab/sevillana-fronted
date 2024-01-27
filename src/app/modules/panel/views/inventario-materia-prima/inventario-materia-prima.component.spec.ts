import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioMateriaPrimaComponent } from './inventario-materia-prima.component';

describe('InventarioMateriaPrimaComponent', () => {
  let component: InventarioMateriaPrimaComponent;
  let fixture: ComponentFixture<InventarioMateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioMateriaPrimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventarioMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
