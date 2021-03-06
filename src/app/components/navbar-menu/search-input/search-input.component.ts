import { Menu } from './../../../model/menu';
import { Integration } from './../../../model/integration';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchControl:                     FormControl                      = new FormControl();
  options:                           Array<string>                    = new Array<string>();
  filteredOptions:                   Observable<Array<string>>        = new Observable<Array<string>>();
  integrations:                      Array<Integration>               = new Array<Integration>();
  showAutocomplete!:                 boolean;
  @Input() menus!:                   Array<Menu>;
  @Output() integrationsResultEvent: EventEmitter<Array<Integration>> = new EventEmitter<Array<Integration>>();
  @Output() integrationEmptyEvent:   EventEmitter<Integration>        = new EventEmitter<Integration>();
  @Output() selectedMenuEvent:       EventEmitter<string>             = new EventEmitter<string>();
  @Output() searchControlEvent:      EventEmitter<string>             = new EventEmitter<string>();


  constructor() {}

  ngOnInit(): void {
    this.fillOptions();
  }

  updatedVal(e: any): void {
    if(e && e.length >= 3) {
      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private fillOptions(): void {
    this.menus.forEach(m => {
      if (m.integrations.length > 0) {
        this.options.push(m.name);
        if (m.name === 'all') {
          m.integrations.forEach(i => {
            this.options.push(i.name);
          });
        }
      }
      if (m.subMenus !== undefined && m.subMenus.length > 0) {
        m.subMenus.forEach(sm => {
          if (sm.integrations.length > 0) {
            this.options.push(sm.name);
          }
        });
      }
    });
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onSearch(value: string): void {
    setTimeout(() => {
      this.searchIntegrations(value);
    }, 700);
  }

  searchIntegrations(value: string): void {
    value             = value.toLocaleLowerCase();
    this.integrations = new Array<Integration>();
    this.menus.forEach(m => {
      if (m.name.toLocaleLowerCase().includes(value) || m.display.toLocaleLowerCase().includes(value)) {
        this.integrations.push(...m.integrations);
      }
      if (m.name === 'all') {
        m.integrations.forEach(i => {
          if (i.name.toLocaleLowerCase().includes(value)) {
            this.integrations.push(i);
          }
        });
      }
      if (m.subMenus !== undefined && m.subMenus.length > 0) {
        m.subMenus.forEach(sm => {
          if (sm.name.toLocaleLowerCase().includes(value) || sm.display.toLocaleLowerCase().includes(value)) {
            this.integrations.push(...sm.integrations);
          }
        });
      }
    });
    this.integrationEmptyEvent.emit(new Integration());
    this.integrationsResultEvent.emit(this.integrations);
    this.selectedMenuEvent.emit('');
    this.searchControlEvent.emit(value);
  }

}
