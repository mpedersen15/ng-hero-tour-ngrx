
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CustomRouterStateSerializer } from './shared/utils';
import { environment } from './../../environments/environment.prod';
import { appReducer, appMetaReducers } from './app.reducer';
import { HeroEffects } from './heroes/hero.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreRouterConnectingModule,
        StoreModule.forRoot(appReducer, {metaReducers: appMetaReducers}),
        EffectsModule.forRoot([HeroEffects]),
        environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    declarations: []
})

export class StateModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StateModule,
            providers: [
                { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: StateModule) {
        if (parentModule) {
            throw new Error(
                'StateModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
