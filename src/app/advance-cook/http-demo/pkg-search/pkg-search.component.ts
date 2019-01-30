import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PkgSearchService,NpmPackageInfo } from './pkg-search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pkg-search',
  templateUrl: './pkg-search.component.html',
  styleUrls: ['./pkg-search.component.less']
})
export class PkgSearchComponent implements OnInit {
  withRefresh = false;
  pakName : string = '';
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();

  constructor(private pkgSearchService : PkgSearchService) { }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(packageName =>
            this.pkgSearchService.search(packageName, this.withRefresh))
    );
  }

  search() {
    this.searchText$.next(this.pakName);
  }

}
