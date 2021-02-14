import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  /** ProductListComponent 로부터 값을 전달받음 */
  @Input() product;

  constructor() {}

  ngOnInit(): void {}
}
