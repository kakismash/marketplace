import { IntegrationComponent } from './components/integration/integration.component';
import { FullIntegrationComponent } from './components/full-integration/full-integration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'integration/:integrationId', component: FullIntegrationComponent },
  { path: ':menuName                 ', component: IntegrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
