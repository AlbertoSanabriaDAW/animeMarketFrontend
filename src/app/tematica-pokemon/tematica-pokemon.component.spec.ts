import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaPokemonComponent } from './tematica-pokemon.component';

describe('TematicaPokemonComponent', () => {
  let component: TematicaPokemonComponent;
  let fixture: ComponentFixture<TematicaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
