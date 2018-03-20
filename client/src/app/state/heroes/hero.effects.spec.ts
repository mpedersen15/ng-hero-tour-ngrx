import { LoadAll, LoadAllSuccess } from "./hero.actions";
import { Character } from './../../core/models/character.model';
import { hot, cold } from 'rxjs-marbles';
import { Hero } from "../../core/models/hero.model";

describe('Hero Effects', () => {
    const heroes: Hero[] = [{
        id: 1,
        name: 'Thor'

    }];

    describe('LoadAll', () => {
        test('should return a LoadAllSuccess with heroes', () => {
            const action = new LoadAll(),
            completion = new LoadAllSuccess({ heroes }),
            response = cold('a|', { a: heroes }),
            expected = cold('-b', { b: completion});
        });
    });
});