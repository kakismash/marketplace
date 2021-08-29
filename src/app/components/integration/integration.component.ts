import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'integration-card',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
  animations: [
    trigger('elevateCard', [
      state('true', style({
        transform: 'translateY(-3%)'
      })),
      state('false', style({
        transform: 'translateY(0%)'
      })),
      transition('true => false', animate('100ms ease-out')),
      transition('false => true', animate('100ms ease-in'))
    ])
  ]
})
export class IntegrationComponent implements OnInit, OnChanges {

  elevateCard:                        Array<boolean>            = new Array<boolean>();
  integrations:                       Array<Integration>        = new Array<Integration>();
  @Input() menus!:                    Array<Menu>;
  @Input() selectedMenu!:             string;
  @Output() integrationSelectedEvent: EventEmitter<Integration> = new EventEmitter<Integration>();
  @Output() searchingEvent:           EventEmitter<boolean>     = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.doIntegrationsCard();
  }

  ngOnChanges(): void {
    this.integrations = new Array<Integration>();
    this.doIntegrationsCard();
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
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

  fullIntegration(integration: Integration): void {
    this.integrationSelectedEvent.emit(integration);
  }

}
