import { Integration } from 'src/app/model/integration';
import { Component, Input, OnInit } from '@angular/core';
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
  elevateCard:                 Array<boolean>      = new Array<boolean>();
  @Input() integration!:       Integration;
  @Input() storeIntegrations!: Array<Integration>;

  constructor() { }

  ngOnInit(): void {
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  checkIntegrationInStore(integration: Integration): boolean {
    return this.storeIntegrations.some(i => i.integrationId === integration.integrationId);
  }

}
