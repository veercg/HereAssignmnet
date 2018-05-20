import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../interface/feed.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  feed: Feed;

  constructor() { }

  ngOnInit() {
  }

}
