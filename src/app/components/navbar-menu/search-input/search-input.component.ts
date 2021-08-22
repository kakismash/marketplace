import { Menu } from './../../../model/menu';
import { Integration } from './../../../model/integration';
import { IntegrationService } from './../../../service/integration.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchControl:   FormControl               = new FormControl();
  options:         Array<string>             = new Array<string>();
  filteredOptions: Observable<Array<string>> = new Observable<Array<string>>();
  @Input() menus!: Array<Menu>;

  constructor() {}

  ngOnInit(): void {
    this.fillOptions();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private fillOptions(): void {
    this.menus.forEach(m => {
      m.integrations.forEach(i => {
        this.options.push(...i.tags);
        this.options.push(i.name);
        if (m.subMenus !== undefined && m.subMenus.length > 0) {
          m.subMenus.forEach(sm => {
            sm.integrations.forEach(i => {
              this.options.push(...i.tags);
              this.options.push(i.name);
            });
          });
        }
      });
    });
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

}
