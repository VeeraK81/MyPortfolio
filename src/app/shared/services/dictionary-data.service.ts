import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WordReference } from 'src/app/models/word-reference';

@Injectable({
  providedIn: 'root'
})
export class DictionaryDataService {

  _url: string = '/assets/source.json';

  constructor(private http: HttpClient) { }


  getData(): Observable<WordReference[]>{

  return this.http.get<WordReference[]>(this._url);

  }
}
