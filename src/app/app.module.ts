import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrationComponent } from './components/integration/integration.component';
import { TruncatePipe } from './util/truncate.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { SearchInputComponent } from './components/navbar-menu/search-input/search-input.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { SideLinksComponent } from './components/sidenav-menu/side-links/side-links.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FullIntegrationComponent } from './components/full-integration/full-integration.component';
import { ShortcutComponent } from './components/shortcut/shortcut.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { IntegrationCardComponent } from './components/integration-card/integration-card.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    IntegrationComponent,
    TruncatePipe,
    NavbarMenuComponent,
    SearchInputComponent,
    SidenavMenuComponent,
    SideLinksComponent,
    BreadcrumbComponent,
    FullIntegrationComponent,
    ShortcutComponent,
    SearchResultComponent,
    IntegrationCardComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatPaginatorModule,
    MatTableModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customComponent = createCustomElement(AppComponent, {injector});
    customElements.define('market-place', customComponent);
  }

  ngDoBootstrap() {}
}
