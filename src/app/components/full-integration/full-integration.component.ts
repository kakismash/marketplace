import { Integration } from './../../model/integration';
import { IntegrationService } from './../../service/integration.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-integration',
  templateUrl: './full-integration.component.html',
  styleUrls: ['./full-integration.component.scss']
})
export class FullIntegrationComponent implements OnInit {

  integration: Integration = new Integration();

  constructor(private integrationService: IntegrationService,
              private activatedRoute:     ActivatedRoute) {


  }

  ngOnInit(): void {
    this.loadIntegration();
  }

  private loadIntegration(): void {
    let id: number;
    this.integrationService
        .load()
        .subscribe(rIntegrations => {
          this.activatedRoute.params.subscribe(params => {
            id = +params['integrationId'];
          });
          this.integration = new Integration();
          debugger;
          this.integration = rIntegrations.find(i => i.integrationId === id) || new Integration();

        }, err => {
          console.log(err);
      });
  }

}
