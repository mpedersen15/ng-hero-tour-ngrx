import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import { HeroActionTypes, LoadAll, LoadAllSuccess, LoadAllFail } from './hero.actions';
import { HeroesService } from './../../core/services/heroes.service';
import { Hero } from '../../core/models/hero.model';

@Injectable()
export class HeroEffects {
    @Effect()
    loadAll: Observable<Action> = this.actions$
        .ofType<LoadAll>(HeroActionTypes.LoadAll)
        .pipe(
            switchMap(() => this.heroService.getHeroes()),
            map(
                (heroes: Hero[]) => new LoadAllSuccess({ heroes }),
                catchError(err => of(new LoadAllFail()))
            )
        );

    constructor(private actions$: Actions, private heroService: HeroesService) {

    }
}
