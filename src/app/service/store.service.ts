import { Observable } from 'rxjs';
import { Integration } from 'src/app/model/integration';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  path: string = environment.bOUrl + 'store-integrations.json';

  constructor(private http: HttpClient) { }

  load(): Observable<Array<Integration>> {
    return this.http.get<Array<Integration>>(this.path);
  }
}
