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
  @Input() _class: any;
  @Input() isBanner: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('THE ITEM', this.item);
  }
}
