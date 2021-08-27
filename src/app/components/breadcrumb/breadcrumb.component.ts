import { SubMenu } from './../../model/sub-menu';
import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {

  sMenu:                  Menu                  = new Menu();
  sSubMenu:               SubMenu               = new SubMenu();
  subMenus:               Array<SubMenu>        = new Array<SubMenu>();
  @Input() selectedMenu!: string;
  @Input() integration!:  Integration;
  @Input() menus!:        Array<Menu>;

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

}
