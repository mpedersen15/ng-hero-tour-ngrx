import { routerReducer} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';  // throws error if we try to mutate state
import { reducer as heroReducer } from './heroes/hero.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { environment } from './../../environments/environment';


export const appReducer: ActionReducerMap<AppState> = {
    router: routerReducer,
    hero: heroReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
