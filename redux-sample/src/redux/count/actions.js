import { INCREMENT, DECREMENT } from './constants';

export const increment = payload => ({
    type: INCREMENT,
    payload
});

export const decrement = payload => ({
    type: DECREMENT,
    payload
});