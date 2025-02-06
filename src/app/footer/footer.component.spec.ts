import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo with correct alt text', () => {
    const logo = fixture.debugElement.query(By.css('.logo-title img'));
    expect(logo).toBeTruthy();
    expect(logo.nativeElement.alt).toBe('Logo');
  });

  it('should display company name AnimeMarket', () => {
    const companyName = fixture.debugElement.query(By.css('.logo-title h2'));
    expect(companyName).toBeTruthy();
    expect(companyName.nativeElement.textContent).toContain('AnimeMarket');
  });

  it('should have navigation links', () => {
    const links = fixture.debugElement.queryAll(By.css('.footer-links a'));
    expect(links.length).toBeGreaterThan(0);
    expect(links.map(link => link.nativeElement.textContent)).toEqual([
      'Sobre Nosotros',
      'Política de Privacidad',
      'Términos y Condiciones',
      'Contacto',
    ]);
  });

  it('should have social media icons', () => {
    const socialMediaIcons = fixture.debugElement.queryAll(By.css('.social-media a img'));
    expect(socialMediaIcons.length).toBe(3); // Facebook, Twitter, Instagram
    expect(socialMediaIcons[0].nativeElement.alt).toBe('Facebook');
    expect(socialMediaIcons[1].nativeElement.alt).toBe('Twitter');
    expect(socialMediaIcons[2].nativeElement.alt).toBe('Instagram');
  });

  it('should display copyright text', () => {
    const copyright = fixture.debugElement.query(By.css('.text-center'));
    expect(copyright).toBeTruthy();
    expect(copyright.nativeElement.textContent).toContain('© 2025 AnimeMarket');
  });
});
