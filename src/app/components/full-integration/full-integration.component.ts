import { Integration } from './../../model/integration';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'full-integration',
  templateUrl: './full-integration.component.html',
  styleUrls: ['./full-integration.component.scss']
})
export class FullIntegrationComponent implements OnInit {

  scroll:                boolean      = false;
  @Input() integration!: Integration;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any): void {
    const value = event.target.scrollingElement.scrollTop;
    console.log(value)
    if (value >= 100) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

}
