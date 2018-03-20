import { State as heroState } from './heroes/hero.reducer';
import { RouterStateUrl } from './shared/utils';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    hero: heroState;
}

export type State = AppState;
