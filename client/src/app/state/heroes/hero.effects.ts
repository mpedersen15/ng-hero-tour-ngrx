import { Injectable } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { HeroActionTypes, LoadHeroes, LoadHeroesSuccess, LoadHeroesFail } from './hero.actions';
import { HeroesService } from './../../core/services/heroes.service';
import { Hero } from '../../core/models/hero.model';

@Injectable()
export class HeroEffects {
    @Effect()
    loadAll: Observable<Action> = this.actions$
        .ofType(HeroActionTypes.LoadHeroes)
        .switchMap(() => this.heroService.getHeroes())
        .map((heroes: Hero[]) => new LoadHeroesSuccess({ heroes }))
        .catchError(err => of(new LoadHeroesFail()))

    constructor(private actions$: Actions, private heroService: HeroesService) {

    }
}