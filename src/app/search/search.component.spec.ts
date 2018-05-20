import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';

import { SearchComponent } from './search.component';
import { Component , NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from './search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Filters } from '../interface/filters.interface';
import { Feed } from '../interface/feed.interface';
import { Observable, of } from 'rxjs';

@Component({selector: 'app-filter', template: ''})
class AppFilterComponent {}

@Component({selector: 'app-card', template: ''})
class AppCardComponent { }

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchServiceStub: Partial<SearchService>;
  const expectedFeeds: Feed[] = [{
    'name': 'Alvaro Echevarria',
    'title': 'Technology Analyst',
    'company' : 'J.P. Morgan',
    'city': 'London',
    'country': 'United Kingdom',
    'img': 'https://media.licdn.com/dms/image/C4D03AQHgd_b0qMGjTg/profile-displayphoto-shrink_100_100/0?e=1531958400&v=beta&t=uB1OUbJecp1-tKUA_blA3FXE4rZoUJQWu1TyQJTKakM',
    'skills': ['java', 'react', 'redux'],
    'feed_source': 'Referral'
  }];

  searchServiceStub = {
    initiateFeedListUpdate: () => {},
    initiateFilterListUpdate: () => {},
    getFeeds: () => {
      return Observable.of(expectedFeeds);
    },
    searchFeeds: (feeds: Feed[], queryParams: Filters) => {
      return [];
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        AppFilterComponent,
        AppCardComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers:    [ {provide: SearchService, useValue: searchServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.filteredFeeds = [];
    component.sideBarOpened = true;
    component.updateFeedList = (filters: Filters) => {
      console.log(value);
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
