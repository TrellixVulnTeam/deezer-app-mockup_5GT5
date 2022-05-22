import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss'],
})
export class TrackItemComponent implements OnInit {
  @Input() isHeader: any;
  @Input() item: any;
  @Input() isIndex: number = 1;
  @Input() isLast: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // console.log('THE TRACK ITEM', this.item);
  }
}
