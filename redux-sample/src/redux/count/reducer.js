import { INCREMENT, DECREMENT } from './constants';

const initialState = 0;

export const count = (state = initialState, { type, payload}) => {
    switch (type) {
        case INCREMENT:
            return state + payload;
        case DECREMENT:
            return state - payload;
        default:
            return state
    }
}