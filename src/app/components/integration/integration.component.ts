import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';


@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
})
export class IntegrationComponent implements OnInit, OnChanges, OnDestroy {

  integrations:                        Array<Integration>              = new Array<Integration>();
  obs!:                                Observable<any>;
  dataSource!:                         MatTableDataSource<Integration>;
  @Input() menus!:                     Array<Menu>;
  @Input() selectedMenu!:              string;
  @Input() storeIntegrations!:         Array<Integration>;
  @Output() integrationSelectedEvent:  EventEmitter<Integration>       = new EventEmitter<Integration>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.doIntegrationsCard();
  }

  ngOnChanges(): void {
    this.integrations = new Array<Integration>();
    this.doIntegrationsCard();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  doIntegrationsCard(): void {
    this.integrations = new Array<Integration>();
      this.menus.forEach(m => {
        if (m.name === this.selectedMenu) {
          this.integrations.push(...m.integrations);
        }
        if (m.subMenus !== undefined && m.subMenus.length > 0) {
          m.subMenus.forEach(sm => {
            if (sm.name === this.selectedMenu) {
              this.integrations.push(...sm.integrations);
            }
          });
        }
      });
    this.dataSource           = new MatTableDataSource<Integration>(this.integrations)
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs                  = this.dataSource.connect();
  }

  onFullIntegration(event: Integration): void {
    this.integrationSelectedEvent.emit(event);
  }
}
