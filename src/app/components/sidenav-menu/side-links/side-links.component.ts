import { Integration } from './../../../model/integration';
import { Menu } from './../../../model/menu';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-links',
  templateUrl: './side-links.component.html',
  styleUrls: ['./side-links.component.scss']
})
export class SideLinksComponent implements OnInit {

  menuName:                          string                           = 'all';
  @Input() menus!:                   Array<Menu>;
  @Output() menuNameEvent:           EventEmitter<string>             = new EventEmitter<string>();
  @Output() integrationsSearchEvent: EventEmitter<Array<Integration>> = new EventEmitter<Array<Integration>>();
  @Output() integrationEmptyEvent:   EventEmitter<Integration>        = new EventEmitter<Integration>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelection(event: any){
    this.menuName = event.option.value;
    this.menuNameEvent.emit(this.menuName);
    this.integrationsSearchEvent.emit([]);
    this.integrationEmptyEvent.emit(new Integration());
  }

}
