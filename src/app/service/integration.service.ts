import { Integration } from './../model/integration';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class IntegrationService {

  path: string = environment.bOUrl + '095c950b-0f0f-4a30-a3c9-f37abe5ca7fe';

  constructor(private http: HttpClient) { }

  load(): Observable<Array<Integration>> {
    return this.http.get<Array<Integration>>(this.path);
  }
}
