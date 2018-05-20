import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { MatSelectionList, MatSelectionListChange, MatListOption } from '@angular/material';

import { SearchService } from '../search/search.service';
import { Region } from '../interface/region.interface';
import { Filters } from '../interface/filters.interface';
import { FilterChip } from '../interface/filter-chip.interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  feedSources = ['Referral', 'Linkedin.com', 'Indeed.com', 'Naukri.com', 'Socedo.com'];
  regions: Region[];
  filterChips: FilterChip[] = [];

  @ViewChild('sources')
  sourcesOptions: MatSelectionList;

  @ViewChild('cities')
  regionOptions: MatSelectionList;

  @Output()
  filtersSelected: EventEmitter<MatSelectionListChange>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getRegions();
  }

  getRegions(): void {
    this.searchService.getRegions()
      .subscribe(regions => {
        this.regions = regions;
      });
  }

  onFilterSelectionChange() {
    const filters = this.getSelectedFilters();
    this.searchService.initiateFeedListUpdate(filters);
    this.filterChips = this.prepareFilterchips(filters);
    this.searchService.initiateFilterListUpdate(this.filterChips);
  }

  getSelectedFilters() {
    const selectedSourcesOptions: MatListOption[] = this.sourcesOptions.selectedOptions.selected;
    const selectedRegionOptions: MatListOption[] = this.regionOptions.selectedOptions.selected;
    const selectedSources = _.map(selectedSourcesOptions, (option) => option.value);
    const selectedRegions = _.map(selectedRegionOptions, (option) => option.value);
    return {
      'feedSource': selectedSources,
      'feedRegion': selectedRegions
    };
  }

  prepareFilterchips(filters: Filters) {
    let chips: FilterChip[] = [];
    if (filters) {
      const keys = _.keys(filters);
      _.forEach(keys, key => {
        const keyFilterChips = _.map(filters[key], value => {
          return {'name': value};
        });
        chips = _.concat(chips, keyFilterChips);
      });
    }
    console.log(filters);
    console.log(chips);
    return chips;
  }
}
