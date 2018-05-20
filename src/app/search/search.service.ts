import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

import { Feed } from '../interface/feed.interface';
import { Region } from '../interface/region.interface';
import { Filters } from '../interface/filters.interface';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  dataUrl = '../assets/feed-data.json';
  regionDataUrl = '../assets/regions.json';

  private updateFeedList = new BehaviorSubject<any>(undefined);
  currentUpdateFeedList = this.updateFeedList.asObservable();

  private updateFilterList = new BehaviorSubject<any>(undefined);
  currentupdateFilterList = this.updateFilterList.asObservable();

  initiateFeedListUpdate(value: any) {
    this.updateFeedList.next(value);
  }
  initiateFilterListUpdate(value: any) {
    this.updateFilterList.next(value);
  }

  constructor(private http: HttpClient) {
  }

  getFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.dataUrl)
    .pipe(
      catchError(this.handleError('getFeeds', []))
    );
  }

  searchFeeds(feeds: Feed[], queryParams: Filters): Feed[] {
    let filteredFeed = feeds;
    if (queryParams && queryParams.feedSource && queryParams.feedSource.length > 0) {
      queryParams.feedSource = _.map(queryParams.feedSource, value => value.toLowerCase());
      filteredFeed = _.filter(filteredFeed, obj => {
          return _.includes(queryParams.feedSource, obj.feed_source.toLowerCase());
      });
    }
    if (queryParams && queryParams.feedRegion && queryParams.feedRegion.length > 0) {
      queryParams.feedRegion = _.map(queryParams.feedRegion, value => value.toLowerCase());
      filteredFeed = _.filter(filteredFeed, obj => {
        return _.includes(queryParams.feedRegion, obj.city.toLowerCase());
      });
    }
    return filteredFeed;
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionDataUrl)
    .pipe(
      catchError(this.handleError('getRegions', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
