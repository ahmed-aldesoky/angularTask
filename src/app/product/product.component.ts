import { Component, OnInit } from '@angular/core';

import { DiscountOffers } from '../sharedClassAndType/DiscountOffers';
import { icategory } from '../sharedClassAndType/ICategory';
import { IProduct } from '../sharedClassAndType/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public testId = "test";
  public hide: boolean = true;
  discount: DiscountOffers;
  storeName: string
  storeLogo: string
  productList!: IProduct[]
  categoryList: icategory[]
  clientName: string
  isPurshased: boolean
  userData = "default"
  public cars = ["Fiat", "Lancer", "KIA", "Optera"];
  public greatingMsg = "";
  Greating() {
    console.log("Hello aaaa");
    this.greatingMsg = "welcome aaa";
  }
  logMsg(inputName: any) {
    console.log("hello world");
    console.log(inputName);
  }

  changeing() {
    this.isPurshased = false
  }


  constructor() {
    this.discount = 0.1,
      this.storeName = "m&m",
      this.storeLogo = "/assets/pngwing.com (16).png",
      this.productList = [{ ID: 1, productName: "white chocolate", quantity: 5, price: 150, img: "/assets/storelogo.jpg" }, { ID: 2, productName: "dark chocolate", quantity: 10, price: 100, img: "/assets/storelogo.png" }],
      this.categoryList = [{ ID: 5, name: "chocolate" }],
      this.clientName = "ahmed",
      this.isPurshased = true



  }


  ngOnInit(): void {


  }

}
