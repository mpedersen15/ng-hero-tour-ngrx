import { Action } from '@ngrx/store';
import { Hero } from '../../core/models/hero.model';
// imports

export enum HeroActionTypes {
    LoadAll = '[Hero] Load Heroes',
    LoadAllSuccess = '[Hero] Load Heroes Success',
    LoadAllFail = '[Hero] Load Heroes Fail'
}

export class LoadAll implements Action {
    readonly type = HeroActionTypes.LoadAll;
}

export class LoadAllSuccess implements Action {
    readonly type = HeroActionTypes.LoadAllSuccess;

    constructor(public payload: { heroes: Hero[]}) {}
}

export class LoadAllFail implements Action {
    readonly type = HeroActionTypes.LoadAllFail;
}

export type HeroActions =
| LoadAll
| LoadAllSuccess
| LoadAllFail;
