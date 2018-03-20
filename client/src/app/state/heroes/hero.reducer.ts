import { HeroActions, HeroActionTypes } from './hero.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hero } from '../../core/models/hero.model';

export interface State extends EntityState<Hero> {
    selectedHeroId: number,
    loading: boolean,
    error: string;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: State = adapter.getInitialState({
    selectedHeroId: null,
    loading: false,
    error: ''
});

export function reducer( state: State = initialState, action: HeroActions): State {
    switch(action.type) {
        case HeroActionTypes.LoadHeroes:
            return {
                ...adapter.removeAll(state),
                loading: true,
                error: ''
            }
        case HeroActionTypes.LoadHeroesSuccess:
            return {
                ...adapter.addAll(action.payload.heroes, state),
                loading: false,
                error: ''
            }
        case HeroActionTypes.LoadHeroesFail:
            return {
                ...state,
                loading: false,
                error: 'Error loading heroes'
            }
        default:
            return state;
    }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;