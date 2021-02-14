import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  /** ProductListComponent 로부터 값을 전달받음 */
  @Input() product;

  /** notify property가 변경될때 list component로 이벤트를 발생할 수 있도록 함 */
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
