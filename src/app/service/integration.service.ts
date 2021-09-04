import { Integration } from './../model/integration';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  path: string = environment.bOUrl + 'market-place.json';

  constructor(private http: HttpClient) { }

  load(): Observable<Array<Integration>> {
    return this.http.get<Array<Integration>>(this.path);
  }

}
