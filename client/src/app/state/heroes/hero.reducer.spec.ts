import { LoadAll } from "./hero.actions";
import { reducer } from "./hero.reducer";

describe('Hero load all reducer', () => {s
    let initialState;
    beforeAll(() => {
        initialState = {
            loading: false
        }
    });

    test('should set loading to true on state', () => {
        const action = new LoadAll(),
        result = reducer(initialState, action);

        expect(result.loading).toMatchSnapshot();
    });
});

describe('Hero load all success reducer', () => {
    let initialState;
    beforeAll(() => {
        initialState = {
            loading: false
        }
    });

    test('should set loading to true on state', () => {
        const action = new LoadAll(),
        result = reducer(initialState, action);

        expect(result.loading).toMatchSnapshot();
    });
});