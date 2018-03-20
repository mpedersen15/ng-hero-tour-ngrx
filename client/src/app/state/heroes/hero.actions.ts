import { Action } from '@ngrx/store';
import { Hero } from '../../core/models/hero.model';

export enum HeroActionTypes {
    LoadAll = '[Hero] Load Heroes',
    LoadAllSuccess = '[Hero] Load Heroes Success',
    LoadAllFail = '[Hero] Load Heroes Fail',
    Delete = '[Hero] Delete Hero',
    DeleteSuccess = '[Hero] Delete Hero Success',
    DeleteFail = '[Hero] Delete Hero Fail'
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

export class Delete implements Action {
    readonly type = HeroActionTypes.Delete;

    constructor (public payload: {hero: Hero}) {}
}

export class DeleteSuccess implements Action {
    readonly type = HeroActionTypes.DeleteSuccess;

    constructor(public payload: { hero: Hero}) {}
}

export class DeleteFail implements Action {
    readonly type = HeroActionTypes.DeleteFail;
}

export type HeroActions =
  LoadAll
| LoadAllSuccess
| LoadAllFail
| Delete
| DeleteSuccess
| DeleteFail;
