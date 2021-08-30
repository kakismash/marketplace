import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Integration } from 'src/app/model/integration';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.scss']
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
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1360: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFullIntegration(event: Integration): void {
    this.integrationSelectedEvent.emit(event);
    this.selectedMenuEvent.emit('all');
    this.integrationsSearchEvent.emit(undefined);
  }

}
