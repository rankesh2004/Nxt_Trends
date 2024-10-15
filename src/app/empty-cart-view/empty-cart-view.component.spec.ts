import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCartViewComponent } from './empty-cart-view.component';

describe('EmptyCartViewComponent', () => {
  let component: EmptyCartViewComponent;
  let fixture: ComponentFixture<EmptyCartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyCartViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
