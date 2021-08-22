import { Menu } from './../../model/menu';
import { IntegrationService } from './../../service/integration.service';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  elevateCard:            Array<boolean>     = new Array<boolean>();
  integrations:           Array<Integration> = new Array<Integration>();
  @Input() menus!:        Array<Menu>;
  @Input() selectedMenu!: string;

  constructor() { }

  ngOnInit(): void {
    this.doIntegrationsCard();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.selectedMenu.currentValue);
    this.doIntegrationsCard();
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  doIntegrationsCard(): void {
    const sm: Menu = this.menus.find(m => m.name === this.selectedMenu) || new Menu();
    this.integrations.push(...sm.integrations);
  }

}
