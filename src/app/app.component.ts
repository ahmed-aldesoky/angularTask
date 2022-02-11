import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testId: string = "test";

  title = 'task';

  constructor() { }

  @ViewChild(ProductComponent)
  showProduct!: ProductComponent;



  ngOnInit(): void {

  }
  public myview: boolean = true;
  public myProduct: any;

  show() {
    this.myview = false


  }

  ngAfterViewInit(): void {
    this.myProduct = this.showProduct.renderValues

  }
}
