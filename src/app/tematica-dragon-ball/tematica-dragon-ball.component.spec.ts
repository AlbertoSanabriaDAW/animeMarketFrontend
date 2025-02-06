import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaDragonBallComponent } from './tematica-dragon-ball.component';

describe('TematicaDragonBallComponent', () => {
  let component: TematicaDragonBallComponent;
  let fixture: ComponentFixture<TematicaDragonBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaDragonBallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaDragonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
