import { StoreService } from './service/store.service';
import { Menu } from './model/menu';
import { Integration } from './model/integration';
import { IntegrationService } from './service/integration.service';
import { Component, Input, OnInit } from '@angular/core';
import { mapMenu } from './util/util';

@Component({
  selector: 'market-place',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggle!:              boolean;
  integrations:         Array<Integration>              = new Array<Integration>();
  storeIntegrations:    Array<Integration>              = new Array<Integration>();
  shortcutIntegrations: Array<Integration>              = new Array<Integration>();
  sIntegrations!:       Array<Integration> | undefined;
  menus:                Array<Menu>                     = new Array<Menu>();
  selectedMenu:         string                          = 'all';
  eIntegration!:        Integration;
  searchControlValue!:  string;
  @Input() storeKey!:   string;

  constructor(private integrationService: IntegrationService,
              private storeService:       StoreService) {
    // Only for debug purpose
    // TODO Please remove
    this.storeKey = '5hk';
  }

  ngOnInit(): void {
    this.loadIntegrations();
  }

  private loadIntegrations(): void {
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.integrations = new Array<Integration>();
          this.menus        = new Array<Menu>();
          Object.assign(this.integrations, rIntegrations);
          this.menus        = mapMenu(this.integrations);
          this.loadShortcutIntegrations(this.integrations);
          if (this.isStoreKey()) {
            this.loadStoreIntegrations();
          }
        }, err => {
          console.log(err);
      });
  }

  private loadStoreIntegrations(): void {
    this.storeService
        .load(this.storeKey)
        .subscribe(rIntegrations => {
          this.storeIntegrations = new Array<Integration>();
          Object.assign(this.storeIntegrations, rIntegrations);
          if (this.storeIntegrations !== undefined && this.storeIntegrations.length > 0) {
            this.menus.splice(1,0,this.generateIntegrated());
          }
        }, err => {
          console.log(err);
      });
  }

  // INTEGRATED
  generateIntegrated(): Menu {
    const integratedMenu: Menu  = new Menu();
    integratedMenu.name         = 'integrated';
    integratedMenu.display      = 'Integrated';
    integratedMenu.icon         = 'check_circle';
    integratedMenu.subMenus     = [];
    integratedMenu.integrations = new Array<Integration>();
      this.integrations.forEach(i => {
        this.storeIntegrations.forEach(sI => {
          if (i.integrationId === sI.integrationId) {
            integratedMenu.integrations.push(sI);
          }
        });
      })
    return integratedMenu;
  }

  private isStoreKey(): boolean {
    return this.storeKey ? true : false;
  }

  private loadShortcutIntegrations(integrations: Array<Integration>): void {
    integrations.forEach(i => {
      if (i.shortcut) {
        this.shortcutIntegrations.push(i);
      }
    });
  }

  onMenuNameChange(event: string): void {
    this.selectedMenu = event;
  }

  onIntegrationsResultChange(event: Array<Integration>): void {
    this.sIntegrations = new Array<Integration>();
    this.sIntegrations = event;
  }

  onIntegrationEmpty(event: Integration): void {
    this.eIntegration = event;
  }

  onChangeSelectedMenu(event: string): void {
    this.selectedMenu = event;
  }

  onSearchControlChange(event: string): void {
    this.searchControlValue = event;
  }

}
