import { FETCH_POST, NEW_POST , FETCH_USER} from './../actions/types';

const initialState = {
    items: [],
    item: {},
    users:[]
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
            case FETCH_USER:
            let newUser= Object.assign({}, state);
            newUser.users.push(actions.payload);
            return newUser;
        default:
            return state;
    }
}