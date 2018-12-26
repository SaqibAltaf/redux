import { FETCH_POST, NEW_POST } from './../actions/types';

const initialState = {
    items: [],
    item: {}
}


export default function (state = initialState, actions) {
    switch (actions.type) {
        case FETCH_POST:
            return {
                ...state,
                items: actions.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: actions.payload
            }
        default:
            return state;
    }
}