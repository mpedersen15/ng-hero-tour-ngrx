import { LoadAll, HeroActionTypes, LoadAllSuccess } from './hero.actions';
import { Hero } from '../../core/models/hero.model';

describe('Hero LoadAll', () => {
    test('should have type equal to LoadAll', () => {
        const action = new LoadAll();

        expect(action.type).toBe(HeroActionTypes.LoadAll);
    });

    test('LoadAllSuccess should have heroes payload', () => {
        const heroes: Hero[] = [
            {
                id: 1,
                name: 'Thor',
                powers: ['Lightning'],
                character: {
                    id: 1,
                    name: 'Thor',
                    description: '',
                    urls: [''],
                    thumbnail: ''
                }
            }
        ]
        const action = new LoadAllSuccess({ heroes });

        // expect(action.type).toBe(HeroActionTypes.LoadAllSuccess);
        // expect(action.payload.heroes).toBe(heroes);

        expect(action.type).toMatchSnapshot();
        expect(action.payload).toMatchSnapshot();
    });
});


