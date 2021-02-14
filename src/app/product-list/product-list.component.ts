import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = Products;

  share() {
    alert('The product has been shared!');
  }

  /** 자식 컴포넌트 product-alerts에서
   *  Output 데코레이터로 정의된 notify에 의해 이벤트가 발생할때
   *  action 정의
   */
  onNotify() {
    alert('product-alerts에 event를 전달하여 부모 이벤트에서 alert 발생');
  }
  constructor() {}

  ngOnInit(): void {}
}
