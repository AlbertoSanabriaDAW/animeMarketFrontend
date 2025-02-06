import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutAnimeMarketComponent } from './about-anime-market.component';
import { By } from '@angular/platform-browser';

describe('AboutAnimeMarketComponent', () => {
  let component: AboutAnimeMarketComponent;
  let fixture: ComponentFixture<AboutAnimeMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAnimeMarketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutAnimeMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AboutAnimeMarket component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the owner name', () => {
    const owner = fixture.debugElement.query(By.css('p'));
    expect(owner.nativeElement.textContent).toContain('Alberto Sanabria');
  });

  it('should display the location', () => {
    const location = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(location.nativeElement.textContent).toContain('Torre Sevilla, Sevilla, España');
  });
});
