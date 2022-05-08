import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
  @Input() gridLink: any;
  @Input() item: any;
  @Input() hasDescription: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
