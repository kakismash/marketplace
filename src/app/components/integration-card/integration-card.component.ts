import { Menu } from './../../model/menu';
import { Integration } from 'src/app/model/integration';
import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'integration-card',
  templateUrl: './integration-card.component.html',
  styleUrls: ['./integration-card.component.scss'],
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
export class IntegrationCardComponent implements OnInit {

  elevateCard:                        Array<boolean>            = new Array<boolean>();
  @Input() integrations!:             Array<Integration>;
  @Input() storeIntegrations!:        Array<Integration>;
  @Input() selectedMenu!:             string;
  @Output() integrationSelectedEvent: EventEmitter<Integration> = new EventEmitter<Integration>();

  constructor() { }

  ngOnInit(): void {
  }

  checkIntegrationInStore(integration: Integration): boolean {
    return this.storeIntegrations.some(i => i.integrationId === integration.integrationId);
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  onFullIntegration(integration: Integration): void {
    this.integrationSelectedEvent.emit(integration);
  }

}
