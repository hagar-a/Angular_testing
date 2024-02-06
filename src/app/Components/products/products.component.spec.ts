import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductListService } from '../../Services/product-list/product-list.service';
import { CartListService } from '../../Services/cart-list.service';
import { Product } from '../../DataTypes/product';
import { By } from '@angular/platform-browser';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockProductListService: jasmine.SpyObj<ProductListService>;
  let mockCartListService: jasmine.SpyObj<CartListService>;

  beforeEach(() => {
    mockProductListService = jasmine.createSpyObj('ProductListService', ['getProducts']);
    mockCartListService = jasmine.createSpyObj('CartListService', ['addToCart']);

    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        { provide: ProductListService, useValue: mockProductListService },
        { provide: CartListService, useValue: mockCartListService }
      ]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add method when button is clicked', () => {
    const product: Product = 
    { ID: "1", 
    Name: 'Test Product', 
    Price: 90000,
     Img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
     rate:3};


   

    const addButton = fixture.debugElement.query(By.css('button'));
    addButton.triggerEventHandler('click');
    fixture.detectChanges(); 
    expect(mockCartListService.addToCart).toHaveBeenCalledWith(product.ID);
  });
});
