import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from './hero.reducer';

export const getHeroesState = createFeatureSelector<fromHeroes.State>('hero');
// Creates the 'heroes' section of the Redux Store (be wary of spelling!)

export const {
    selectAll: getAllHeroes, // Ordered array of Heros
    selectEntities: getHeroEntities, // Dicitonary of Heros
    selectIds: getHeroIds, // Array of Ids
    selectTotal: getTotalHeros
} = fromHeroes.adapter.getSelectors(getHeroesState);

export const getSelectedHeroId = createSelector(
    getHeroesState,
    fromHeroes.getSelectedHeroId
);

export const getLoading = createSelector(
    getHeroesState,
    fromHeroes.getLoading
);

export const getError = createSelector(
    getHeroesState,
    fromHeroes.getError
);
