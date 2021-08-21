import { Menu } from './../../../model/menu';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-links',
  templateUrl: './side-links.component.html',
  styleUrls: ['./side-links.component.scss']
})
export class SideLinksComponent implements OnInit {

  @Input() menus!: Array<Menu>;

  constructor() { }

  ngOnInit(): void {
  }

}
