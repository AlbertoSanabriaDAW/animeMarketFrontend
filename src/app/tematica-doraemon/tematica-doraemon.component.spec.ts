import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaDoraemonComponent } from './tematica-doraemon.component';

describe('TematicaDoraemonComponent', () => {
  let component: TematicaDoraemonComponent;
  let fixture: ComponentFixture<TematicaDoraemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TematicaDoraemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TematicaDoraemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
