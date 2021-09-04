import { SubMenu } from './../../model/sub-menu';
import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {

  sMenu:                             Menu                             = new Menu();
  sSubMenu:                          SubMenu                          = new SubMenu();
  subMenus:                          Array<SubMenu>                   = new Array<SubMenu>();
  @Input() selectedMenu!:            string;
  @Input() integration!:             Integration;
  @Input() menus!:                   Array<Menu>;
  @Input() searching!:               boolean;
  @Input() sIntegrations!:           Array<Integration> | undefined;
  @Input() searchControlValue!:      string;
  @Output() navigateBreadcrumbEvent: EventEmitter<string>             = new EventEmitter<string>();
  @Output() integrationEmptyEvent:   EventEmitter<Integration>        = new EventEmitter<Integration>();
  @Output() activeSearchResultEvent: EventEmitter<Array<Integration>> = new EventEmitter<Array<Integration>>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.loadActiveMenu();
  }

  private loadActiveMenu(): void {
    this.sSubMenu = new SubMenu();
    if (this.menus !== undefined && this.menus.length > 0) {
      this.menus.forEach(m => {
        if (m.name === this.selectedMenu) {
          this.sMenu = m;
        }
        if (m.subMenus !== undefined && m.subMenus.length > 0) {
          m.subMenus.forEach(sm => {
            if (sm.name === this.selectedMenu) {
              this.sSubMenu = sm;
              this.sMenu    = m;
            }
          });
        }
      });
    }
  }

  onNavigateBreadcrumb(menuName: string): void {
    this.navigateBreadcrumbEvent.emit(menuName);
    this.integrationEmptyEvent.emit(new Integration());
  }

  emptyIntegration(): boolean {
    return Object.keys(this.integration).length === 0;
  }

  loadActiveSearch(): void {
    const activeSearchResult: Array<Integration> = new Array<Integration>();
    this.menus.forEach(m => {
      if (m.name.toLocaleLowerCase().includes(this.searchControlValue) || m.display.toLocaleLowerCase().includes(this.searchControlValue)) {
        activeSearchResult.push(...m.integrations);
      }
      if (m.name === 'all') {
        m.integrations.forEach(i => {
          if (i.name.toLocaleLowerCase().includes(this.searchControlValue)) {
            activeSearchResult.push(i);
          }
        });
      }
      if (m.subMenus !== undefined && m.subMenus.length > 0) {
        m.subMenus.forEach(sm => {
          if (sm.name.toLocaleLowerCase().includes(this.searchControlValue) || sm.display.toLocaleLowerCase().includes(this.searchControlValue)) {
            activeSearchResult.push(...sm.integrations);
          }
        });
      }
    });
    this.integrationEmptyEvent.emit(new Integration());
    this.activeSearchResultEvent.emit(activeSearchResult);
  }

}
