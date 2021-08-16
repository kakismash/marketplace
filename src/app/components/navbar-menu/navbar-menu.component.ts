import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  scroll: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const value = event.target.scrollingElement.scrollTop;
    if (value >= 50) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
