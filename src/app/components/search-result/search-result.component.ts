import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Integration } from './../../model/integration';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges, OnDestroy {

  obs!:                                Observable<any>;
  dataSource!:                         MatTableDataSource<Integration>;
  @Input() sIntegrations!:             Array<Integration> | undefined;
  @Input() storeIntegrations!:         Array<Integration>;
  @Output() integrationSelectedEvent:  EventEmitter<Integration>        = new EventEmitter<Integration>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataSource           = new MatTableDataSource<Integration>(this.sIntegrations)
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs                  = this.dataSource.connect();
  }

  ngOnChanges(): void {
    this.dataSource           = new MatTableDataSource<Integration>(this.sIntegrations)
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs                  = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  onFullIntegration(integration: Integration): void {
    this.integrationSelectedEvent.emit(integration);
  }

}
