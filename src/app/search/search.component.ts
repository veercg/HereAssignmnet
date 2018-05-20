import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import {SearchService} from './search.service';
import { Feed } from '../interface/feed.interface';
import { Filters } from '../interface/filters.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allFeeds: Feed[];
  filteredFeeds: Feed[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getFeeds();
    this.searchService.currentUpdateFeedList.subscribe(filters => this.updateFeedList(filters));
  }

  getFeeds(): void {
    this.searchService.getFeeds()
      .subscribe(feeds => {
        this.allFeeds = feeds;
        this.filteredFeeds = this.allFeeds;
      });
  }

  updateFeedList(filters: Filters) {
    this.filteredFeeds = this.searchService.searchFeeds(this.allFeeds, filters);
  }

}
