import { SubMenu } from './../../model/sub-menu';
import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  ngOnChanges(): void {
    this.integrations = new Array<Integration>();
    this.doIntegrationsCard();
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  doIntegrationsCard(): void {
    const sm: Menu    = this.menus.find(m => m.name === this.selectedMenu) || new Menu();
    let subm: SubMenu = new SubMenu();
    if (sm.integrations !== undefined && sm.integrations.length > 0) {
      this.integrations.push(...sm.integrations);
    }
    /*this.menus.forEach(m => {
      subm = m.subMenus.find(sbm => sbm.name === this.selectedMenu) || new SubMenu();
      if (subm.integrations !== undefined && subm.integrations.length > 0) {
        this.integrations.push(...subm.integrations);
      }
    });*/

  }

}
