import { Integration } from './../../model/integration';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
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
export class SearchResultComponent implements OnInit {

  elevateCard:                        Array<boolean>                  = new Array<boolean>();
  @Input() sIntegrations!:            Array<Integration> | undefined;
  @Output() integrationSelectedEvent: EventEmitter<Integration>       = new EventEmitter<Integration>();


  constructor() { }

  ngOnInit(): void {
  }

  elevate(id: number): void {
    this.elevateCard[id] = !this.elevateCard[id];
  }

  fullIntegration(integration: Integration): void {
    this.integrationSelectedEvent.emit(integration);
  }

}
