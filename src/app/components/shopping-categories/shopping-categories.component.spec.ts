import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCategoriesComponent } from './shopping-categories.component';

describe('ShoppingCategoriesComponent', () => {
  let component: ShoppingCategoriesComponent;
  let fixture: ComponentFixture<ShoppingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
