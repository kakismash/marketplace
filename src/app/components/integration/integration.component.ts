import { IntegrationService } from './../../service/integration.service';
import { Integration } from './../../model/integration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

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
