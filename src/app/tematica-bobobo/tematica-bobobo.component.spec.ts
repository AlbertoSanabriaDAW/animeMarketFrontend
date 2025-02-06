import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaBoboboComponent } from './tematica-bobobo.component';

describe('TematicaBoboboComponent', () => {
  let component: TematicaBoboboComponent;
  let fixture: ComponentFixture<TematicaBoboboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaBoboboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaBoboboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
