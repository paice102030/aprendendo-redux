import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes'

const initialState = {
    newValue: 'Matheus Paice',
    newValue2: 'Jaque Silva'
};

export const clickReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK_UPDATE_VALUE: 
        return {
            ...state,
            newValue: action.newValue,
            newValue2: action.newValue2
        };
        default: 
            return state;
    }
}