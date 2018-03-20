import { Action } from "@ngrx/store";
import { Hero } from "../../core/models/hero.model";
// imports

export enum HeroActionTypes {
    LoadHeroes = '[Hero] Load Heroes',
    LoadHeroesSuccess = '[Hero] Load Heroes Success',
    LoadHeroesFail = '[Hero] Load Heroes Fail'
}

export class LoadHeroes implements Action {
    readonly type = HeroActionTypes.LoadHeroes;
}

export class LoadHeroesSuccess implements Action {
    readonly type = HeroActionTypes.LoadHeroesSuccess;

    constructor(public payload: { heroes: Hero[]}) {}
}

export class LoadHeroesFail implements Action {
    readonly type = HeroActionTypes.LoadHeroesFail;
}

export type HeroActions = 
| LoadHeroes
| LoadHeroesSuccess
| LoadHeroesFail;