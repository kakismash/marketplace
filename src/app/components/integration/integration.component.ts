import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
})
export class IntegrationComponent implements OnInit, OnChanges {

  integrations:                       Array<Integration>        = new Array<Integration>();
  @Input() menus!:                    Array<Menu>;
  @Input() selectedMenu!:             string;
  @Input() storeIntegrations!:        Array<Integration>;
  @Output() integrationSelectedEvent: EventEmitter<Integration> = new EventEmitter<Integration>();

  constructor() { }

  ngOnInit(): void {
    this.doIntegrationsCard();
  }

  ngOnChanges(): void {
    this.integrations = new Array<Integration>();
    this.doIntegrationsCard();
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
  }

  onFullIntegration(event: Integration): void {
    this.integrationSelectedEvent.emit(event);
  }
}
