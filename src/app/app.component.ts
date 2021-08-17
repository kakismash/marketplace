import { Integration } from './model/integration';
import { IntegrationService } from './service/integration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggle!:      boolean;
  integrations: Array<Integration> = new Array<Integration>();

  constructor(private integrationService: IntegrationService) { }

  ngOnInit(): void {
    this.loadIntegrations();
  }

  private loadIntegrations(): void {
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.integrations = new Array<Integration>();
          Object.assign(this.integrations, rIntegrations);
        }, err => {
          console.log(err);
      });
  }
}
