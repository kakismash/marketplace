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

  toggle!:      boolean;
  integrations: Array<Integration> = new Array<Integration>();
  menus:        Array<Menu>        = new Array<Menu>();

  constructor(private integrationService: IntegrationService) { }

  ngOnInit(): void {
    this.loadIntegrations();
    console.log(this.menus)
  }

  private loadIntegrations(): void {
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.integrations = new Array<Integration>();
          Object.assign(this.integrations, rIntegrations);
          this.menus = mapMenu(this.integrations);
        }, err => {
          console.log(err);
      });
  }

}
