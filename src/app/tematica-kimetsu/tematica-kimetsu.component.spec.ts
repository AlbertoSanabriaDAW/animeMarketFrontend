import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaKimetsuComponent } from './tematica-kimetsu.component';

describe('TematicaKimetsuComponent', () => {
  let component: TematicaKimetsuComponent;
  let fixture: ComponentFixture<TematicaKimetsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaKimetsuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaKimetsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
