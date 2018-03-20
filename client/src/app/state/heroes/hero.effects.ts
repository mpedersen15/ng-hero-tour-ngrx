import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import { HeroActionTypes, LoadAll, LoadAllSuccess, LoadAllFail, Delete, DeleteSuccess, DeleteFail } from './hero.actions';
import { HeroesService } from './../../core/services/heroes.service';
import { Hero } from '../../core/models/hero.model';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class HeroEffects {
    @Effect()
    loadAll: Observable<Action> = this.actions$
        .ofType<LoadAll>(HeroActionTypes.LoadAll)
        .pipe(
            switchMap(() => this.heroService.getHeroes()),
            map(
                // (heroes: Hero[]) => new LoadAllFail(), // hard code a failure to make sure error observable is working
                (heroes: Hero[]) => new LoadAllSuccess({ heroes }),
                catchError(err => of(new LoadAllFail()))
            )
        );

    @Effect()
    delete: Observable<Action> = this.actions$
        .ofType<Delete>(HeroActionTypes.Delete)
        .pipe(
            switchMap((action) => this.heroService.deleteHero(action.payload.hero)),
            map(
                // (heroes: Hero[]) => new LoadAllFail(), // hard code a failure to make sure error observable is working
                (hero: Hero) => new DeleteSuccess({hero}),
                catchError(err => of(new DeleteFail()))
            )
        );

    // DOn't need this since we chain actions above
    @Effect()
    deleteSuccess: Observable<Action> = this.actions$
        .ofType<DeleteSuccess>(HeroActionTypes.DeleteSuccess)
        .pipe(
            mergeMap(
                () => [
                    new LoadAll()
                ]
            )
        );

    constructor(private actions$: Actions, private heroService: HeroesService) {

    }
}
