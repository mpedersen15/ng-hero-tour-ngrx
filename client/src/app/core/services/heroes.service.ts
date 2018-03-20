import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Hero } from '../models/hero.model';
import { BaseService } from './base.service';
import { Power } from '../models/power.model';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.BASE_URL}/heroes`, hero);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.BASE_URL}/heroes/${hero.id}`).pipe(
      map(() => hero)
    );
  }

  getHero(id: string): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.BASE_URL}/heroes/${id}`);
  }

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>(`${this.BASE_URL}/heroes`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.BASE_URL}/heroes/${hero.id}`, hero);
  }
}
