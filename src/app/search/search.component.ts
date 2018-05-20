import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import {SearchService} from './search.service';
import { Feed } from '../interface/feed.interface';
import { Filters } from '../interface/filters.interface';
import { FilterChip } from '../interface/filter-chip.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allFeeds: Feed[];
  filteredFeeds: Feed[];
  sideBarOpened = true;
  // filterChips: FilterChip[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.detectScreen();
    this.getFeeds();
    this.searchService.currentUpdateFeedList.subscribe(filters => this.updateFeedList(filters));
    // this.searchService.currentupdateFilterList.subscribe(filters => this.updateFilterList(filters));
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

  detectScreen() {
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
      console.log('medio');
      this.sideBarOpened = false;
    }
  }
  // updateFilterList(filters: FilterChip[]) {
  //   this.filterChips = filters;
  // }
}
