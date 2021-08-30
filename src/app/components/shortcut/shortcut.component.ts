import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Integration } from 'src/app/model/integration';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.scss'],
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
export class ShortcutComponent implements OnInit {

  @Input() shortcutIntegrations!:     Array<Integration>;
  @Input() integrations!:             Array<Integration>;
  @Input() storeIntegrations!:        Array<Integration>;
  @Output() integrationSelectedEvent: EventEmitter<Integration>        = new EventEmitter<Integration>();
  @Output() selectedMenuEvent:        EventEmitter<string>             = new EventEmitter<string>();
  @Output() integrationsSearchEvent:  EventEmitter<Array<Integration>> = new EventEmitter<Array<Integration>>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  fullIntegration(integration: Integration): void {
    this.integrationSelectedEvent.emit(integration);
    this.selectedMenuEvent.emit('all');
    this.integrationsSearchEvent.emit(undefined);
  }

}
