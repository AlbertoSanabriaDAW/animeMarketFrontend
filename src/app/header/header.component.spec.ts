import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('AnimeMarket');
  });

  it('should have a search bar with correct width', () => {
    const searchBar = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    expect(searchBar).toBeTruthy();
    expect(searchBar.offsetWidth).toBeGreaterThan(0);
  });

  it('should have a category selector with correct options', () => {
    const selectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(selectElement.options.length).toBe(6);
    expect(selectElement.options[0].text).toBe('Todas las temáticas');
  });

  it('should update selectedCategory on change', () => {
    component.onCategoryChange({ target: { value: 'Pokemon' } } as any);
    expect(component.selectedCategory).toBe('Pokemon');
  });

  it('should trigger login function when clicked', () => {
    spyOn(component, 'login');
    const loginElement = fixture.debugElement.query(By.css('.user-login')).nativeElement;
    loginElement.click();
    expect(component.login).toHaveBeenCalled();
  });

  it('should trigger viewCart function when clicked', () => {
    spyOn(component, 'viewCart');
    const cartElement = fixture.debugElement.query(By.css('.user-cart')).nativeElement;
    cartElement.click();
    expect(component.viewCart).toHaveBeenCalled();
  });

  it('should have logo on the left, search bar in the center, and user/cart on the right', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo-title')).nativeElement;
    const searchBarElement = fixture.debugElement.query(By.css('.search-bar')).nativeElement;
    const userSectionElement = fixture.debugElement.query(By.css('.user-section')).nativeElement;

    expect(logoElement.getBoundingClientRect().left).toBeLessThan(searchBarElement.getBoundingClientRect().left);
    expect(searchBarElement.getBoundingClientRect().right).toBeLessThan(userSectionElement.getBoundingClientRect().left);
  });
});
