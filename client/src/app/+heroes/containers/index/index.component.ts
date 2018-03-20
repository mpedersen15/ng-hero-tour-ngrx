import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { HeroesService } from '../../../core/services/heroes.service';
import { Hero } from '../../../core/models/hero.model';
import { AddHeroDialogComponent } from '../../components/add-hero-dialog/add-hero-dialog.component';
import { Store, select } from '@ngrx/store';
import { getAllHeroes, getLoading, getError } from '../../../state/heroes';
import { LoadAll } from '../../../state/heroes/hero.actions';
import { AppState } from './../../../state/app.interfaces';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  heroes$: Observable<Array<Hero>>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  // TODO: use store instead of service
  constructor(private store: Store<AppState>, private matDialog: MatDialog) {
  }

  ngOnInit() {
    // TODO: dispatch action to store
    // this.heroes = this.heroesService.getHeroes();
    this.store.dispatch(new LoadAll());
    this.heroes$ = this.store.pipe(select(getAllHeroes));
    this.loading$ = this.store.pipe(select(getLoading));
    this.error$ = this.store.pipe(select(getError));
  }

  add() {
    this.matDialog.open(AddHeroDialogComponent);
  }

  delete(hero: Hero) {
    // TODO: dispatch action to store
    // TODO: use store for emitting update to the array of heroes
    // this.heroesService.deleteHero(hero)
    //   .subscribe(() => this.heroes = this.heroesService.getHeroes());
  }

}
