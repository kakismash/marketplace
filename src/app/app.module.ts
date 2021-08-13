import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrationComponent } from './components/integration/integration.component';
import { TruncatePipe } from './util/truncate.pipe';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    IntegrationComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
