import { Menu } from './model/menu';
import { Integration } from './model/integration';
import { IntegrationService } from './service/integration.service';
import { Component, OnInit } from '@angular/core';
import { mapMenu } from './util/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggle!:       boolean;
  integrations:  Array<Integration> = new Array<Integration>();
  sIntegrations: Array<Integration> = new Array<Integration>();
  menus:         Array<Menu>        = new Array<Menu>();
  selectedMenu:  string             = 'all';
  eIntegration!: Integration;

  constructor(private integrationService: IntegrationService) { }

  ngOnInit(): void {
    this.loadIntegrations();
  }

  private loadIntegrations(): void {
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.integrations = new Array<Integration>();
          this.integrations = rIntegrations;
          this.menus        = mapMenu(this.integrations);
        }, err => {
          console.log(err);
      });
  }

  onMenuNameChange(event: string): void {
    this.selectedMenu = event;
  }

  onIntegrationsChange(event: Array<Integration>): void {
    this.sIntegrations = event;
  }

  onIntegrationEmpty(event: Integration): void {
    this.eIntegration = event;
  }

}
