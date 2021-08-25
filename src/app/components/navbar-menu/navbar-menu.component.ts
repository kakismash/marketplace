import { Integration } from './../../model/integration';
import { Menu } from './../../model/menu';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'navbar',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  scroll:                          boolean                          = false;
  toggle:                          boolean                          = false;
  buttonMenu!:                     boolean;
  @Input() menus!:                 Array<Menu>;
  @Output() toggleEvent:           EventEmitter<boolean>            = new EventEmitter<boolean>();
  @Output() integrationsEvent:     EventEmitter<Array<Integration>> = new EventEmitter<Array<Integration>>();
  @Output() integrationEmptyEvent: EventEmitter<Integration>        = new EventEmitter<Integration>();
  isExtraSmall:                    Observable<BreakpointState>      = this.breakpointObserver.observe(
                                                                        Breakpoints.XSmall
                                                                      );

  constructor(private readonly breakpointObserver: BreakpointObserver,
              private media:                       MediaObserver) {

    if(this.media.isActive('xs')) {
      this.toggleEvent.emit(false);
    }
  }

  ngOnInit(): void {
    this.showButtonMenu();
  }

  toggleMenu() {
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle)
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any): void {
    const value = event.target.scrollingElement.scrollTop;
    if (value >= 50) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth < 599) {
      this.buttonMenu = true;
      this.toggleEvent.emit(false)
    } else {
      this.buttonMenu = false;
      this.toggleEvent.emit(true)
    }
  }

  showButtonMenu(): void {
    const smallSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        this.buttonMenu = true;
        this.toggleEvent.emit(false)
      } else {
        this.buttonMenu = false;
        this.toggleEvent.emit(true)
      }
    });
  }

  onIntegrationsChange(event: Array<Integration>): void {
    this.integrationsEvent.emit(event);
  }

  onIntegrationEmpty(event: Integration): void {
    this.integrationEmptyEvent.emit(event);
  }

}
