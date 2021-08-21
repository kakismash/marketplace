import { Menu } from './../../model/menu';
import { IntegrationService } from './../../service/integration.service';
import { Integration } from './../../model/integration';
import { Component, OnInit, Input } from '@angular/core';
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
export class IntegrationComponent implements OnInit {

  @Input() menus!: Array<Menu>;
  elevateCard:     Array<boolean> = new Array<boolean>();
  integrations: Array<Integration> = new Array<Integration>();

  constructor() { }

  ngOnInit(): void {
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }


}
