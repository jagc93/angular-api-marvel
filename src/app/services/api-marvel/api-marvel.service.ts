import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DEFAULT_LIMIT, DEFAULT_OFFSET, DEFAULT_URI_CHARACTERS, HASH, PUBLIC_KEY, TS } from 'src/app/constants/general.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  constructor(private http: HttpClient) { }

  public getCharacters() {
    return this.http.get(this.getUrlCharacters());
  }

  private getUrlCharacters() {
    return`${DEFAULT_URI_CHARACTERS}?ts=${TS}&limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
  }
}
