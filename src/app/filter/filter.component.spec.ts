import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDividerModule,
  MatListModule
} from '@angular/material';

import { FilterComponent } from './filter.component';
import { FilterChip } from '../interface/filter-chip.interface';
import { Component, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({selector: 'app-filter-chips', template: ''})
class AppFilterChipsComponent {
  @Input()
  filters: FilterChip[];
}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const expectedFilters: FilterChip[] = [{'name': 'London'}, {'name': 'Indeed.com'}];
  const expectedfeedSources = ['Referral', 'Linkedin.com', 'Indeed.com'];
  const expectedRegions = [];
  let searchServiceStub: Partial<SearchService>;

  searchServiceStub = {
    initiateFeedListUpdate: () => {},
    initiateFilterListUpdate: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterComponent,
        AppFilterChipsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDividerModule,
        MatListModule
      ],
      providers:    [ {provide: SearchService, useValue: searchServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.filterChips = expectedFilters;
    component.feedSources = expectedfeedSources;
    component.regions = expectedRegions;
    component.onFilterSelectionChange = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
