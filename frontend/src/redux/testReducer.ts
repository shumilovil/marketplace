import { InferActionsTypes } from "./types";

const TOGGLE_WANT_EAT = 'TOGGLE_WANT_EAT'
const NEW_NAME = 'NEW_NAME'



// interface ToggleWantEatIF {
//     type: typeof TOGGLE_WANT_EAT
// }

// interface SetNewNameIF {
//     type: typeof NEW_NAME,
//     payload: String
// }

// type EatActionTypes = ToggleWantEatIF | SetNewNameIF

const initialState = {
    name: 'Shum',
    wantEat: false
};

export const eatActions = {
    toggleWantEat: () => ({ type: TOGGLE_WANT_EAT } as const),
    setNewName: (name: string) => ({ type: NEW_NAME, name } as const)
}

type EatActionTypes = ReturnType<InferActionsTypes<typeof eatActions>>

export type Eat = typeof initialState;

export const eatReducer = (state = initialState, action: EatActionTypes): Eat => {

    switch (action.type) {

        case TOGGLE_WANT_EAT:
            return {
                ...state,
                wantEat: !state.wantEat
            }

        case NEW_NAME:
            return {
                ...state,
                name: action.name
            }  

        default:
            return state;
    };

};



// export const toggleWantEat = () => ({ type: TOGGLE_WANT_EAT });
// export const setNewName = (payload: String) => ({ type: NEW_NAME, payload });