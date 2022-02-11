import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  public allProduct: any[] = [
    { "ID": 1, "productName": "Normal chocolate", "quantity": 5, "price": 150, "img": "/assets/storelogo.jpg" },
    { "ID": 2, "productName": "Dark chocolate", "quantity": 10, "price": 100, "img": "/assets/storelogo.png" },
    { "ID": 3, "productName": "White chocolate", "quantity": 3, "price": 120, "img": "/assets/storelogo.jpg" },
    { "ID": 4, "productName": "Mix chocolate", "quantity": 9, "price": 130, "img": "/assets/storelogo.png" },
    { "ID": 5, "productName": "Red chocolate", "quantity": 8, "price": 90, "img": "/assets/storelogo.jpg" },
    { "ID": 6, "productName": "Black chocolate", "quantity": 7, "price": 110, "img": "/assets/storelogo.png" }]

  getAllProduct() {
    return this.allProduct

  }

  GetProductById(prdId: any) {
    for (let id in this.allProduct) {
      if (this.allProduct[id].ID === prdId) {
        return (this.allProduct[id])
      }
      // else if (this.allProduct[id].ID === "") {
      //   console.log("no numberr");


      // }



    }

  }
}


