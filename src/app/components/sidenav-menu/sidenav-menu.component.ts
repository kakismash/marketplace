import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, HostListener, Input, OnInit, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit, OnChanges {

  mode:                           boolean                         = true;
  navigateMenu!:                  string;
  integration:                    Integration                     = new Integration();
  @ViewChild('drawer') drawer!:   MatSidenav;
  @Input() toggle!:               boolean;
  @Input() menus!:                Array<Menu>;
  @Input() selectedMenu!:         string;
  @Input() sIntegrations!:        Array<Integration> | undefined;
  @Input() eIntegration!:         Integration;
  @Input() integrations!:         Array<Integration>;
  @Input() shortcutIntegrations!: Array<Integration>;
  @Input() searchControlValue!:   string;
  @Input() storeIntegrations!:    Array<Integration>;
  @Output() menuNameEvent:        EventEmitter<string>            = new EventEmitter<string>();

  constructor(private media: MediaObserver) {
    if (this.media.isActive('xs')) {
      this.mode = false;
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.eIntegration !== undefined && Object.keys(this.eIntegration).length === 0) {
      this.integration = this.eIntegration;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth < 599) {
      this.drawer.close();
      this.toggle = false;
      this.mode   = false;
    } else {
      this.drawer.open();
      this.toggle = true;
      this.mode   = true;
    }
  }

  onMenuNameChange(event: string): void {
    this.menuNameEvent.emit(event);
  }

  onIntegrationsSearchChange(event: Array<Integration>): void {
    this.sIntegrations = event;
  }

  onFullIntegration(event: Integration): void {
    this.integration = new Integration();
    this.integration = event;
  }

  isIntegrationEmpty(integration: Integration): boolean {
    return Object.keys(integration).length === 0;
  }

  onIntegrationEmpty(event: Integration): void {
    this.integration = event;
  }

  onChangeSelectedMenu(event: string): void {
    this.selectedMenu = event;
  }

  onNavigateBreadcrumb(event: string): void {
    this.selectedMenu = event;
  }

  onActiveSearchResultChange(event: Array<Integration>): void {
    this.sIntegrations = event;
  }

}
