import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";

import { Observable } from "rxjs/Observable";

import { HeroesService } from "../../../core/services/heroes.service";
import { Hero } from "../../../core/models/hero.model";
import { AddHeroDialogComponent } from "../../components/add-hero-dialog/add-hero-dialog.component";
import { Store } from '@ngrx/store';
import { State } from '../../../state/heroes/hero.reducer';
import { getAllHeroes } from '../../../state/heroes';
import { LoadHeroes } from '../../../state/heroes/hero.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  heroes: Observable<Array<Hero>>;

  //TODO: use store instead of service
  constructor(private store: Store<State>, private matDialog: MatDialog) {
  }

  ngOnInit() {
    // TODO: dispatch action to store
    // this.heroes = this.heroesService.getHeroes();
    this.store.dispatch(new LoadHeroes());
    this.heroes = this.store.select(getAllHeroes);
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
