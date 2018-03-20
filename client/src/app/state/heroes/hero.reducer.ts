import { HeroActions, HeroActionTypes } from './hero.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hero } from '../../core/models/hero.model';

export interface State extends EntityState<Hero> {
    selectedHeroId: number;
    loading: boolean;
    error: string;
    message: string;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: State = adapter.getInitialState({
    selectedHeroId: null,
    loading: false,
    error: '',
    message: ''
});

export function reducer( state: State = initialState, action: HeroActions): State {
    switch (action.type) {
        case HeroActionTypes.LoadAll:
            return {
                ...adapter.removeAll(state),
                loading: true,
                error: ''
            };
        case HeroActionTypes.LoadAllSuccess:
            return {
                ...adapter.addAll(action.payload.heroes, state),
                loading: false,
                error: ''
            };
        case HeroActionTypes.LoadAllFail:
            return {
                ...state,
                loading: false,
                error: 'Error loading heroes'
            };
        case HeroActionTypes.Delete:
            return {
                ...state,
                loading: true,
                error: '',
                message: ''
            };
        case HeroActionTypes.DeleteSuccess:
            return {
                ...adapter.removeAll(state),
                loading: false,
                message: 'Hero deleted successfully'
            };
        case HeroActionTypes.DeleteFail:
            return {
                ...state,
                loading: false,
                error: 'Error deleting hero'
            };
        default:
            return state;
    }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
