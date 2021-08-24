import { Menu } from './../../model/menu';
import { Integration } from './../../model/integration';
import { Component, HostListener, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  mode:                         boolean                 = true;
  @ViewChild('drawer') drawer!: MatSidenav;
  @Input() toggle!:             boolean;
  @Input() menus!:              Array<Menu>;
  @Input() selectedMenu!:       string;
  @Input() sIntegrations!:      Array<Integration>;
  @Output() menuNameEvent:      EventEmitter<string> = new EventEmitter<string>();

  constructor(private media: MediaObserver,
              private router: Router) {
    if(this.media.isActive('xs')) {
      this.mode = false;
    }
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth < 599) {
      this.drawer.close();
      this.toggle = false;
      this.mode   = false;
    } else {
      this.drawer.open();
      this.toggle = true;
      this.mode   = true;
    }
  }

  onMenuNameChange(event: string): void {
    this.menuNameEvent.emit(event);
  }

  onIntegrationsSearchChange(event: Array<Integration>): void {
    this.sIntegrations = event;
  }

  isFullIntegration(): boolean {
    console.log(this.router.url);
    return this.router.url.includes('integration/');
  }

}
