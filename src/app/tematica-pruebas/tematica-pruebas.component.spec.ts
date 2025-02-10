import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaPruebasComponent } from './tematica-pruebas.component';

describe('TematicaPruebasComponent', () => {
  let component: TematicaPruebasComponent;
  let fixture: ComponentFixture<TematicaPruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaPruebasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
