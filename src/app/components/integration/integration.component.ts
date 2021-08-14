import { IntegrationService } from './../../service/integration.service';
import { Integration } from './../../model/integration';
import { Component, OnInit } from '@angular/core';
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

  integrations: Array<Integration> = new Array<Integration>();
  elevateCard:  Array<boolean>     = new Array<boolean>();

  constructor(private integrationService: IntegrationService) { }

  ngOnInit(): void {
    this.loadIntegrations();
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  private loadIntegrations(): void {
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.integrations = new Array<Integration>();
          Object.assign(this.integrations, rIntegrations);
        }, err => {
          console.log(err);
      });
  }
}
