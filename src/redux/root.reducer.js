import { combineReducers } from 'redux';

const defaultReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DEFAULT_ACTION_01':
            return {
                ...state,
                default: payload
            };
    
        default:
            return state;
    }
}

// const rootReducer = combineReducers({
//     default: defaultReducer
// });

// export default rootReducer;
export default defaultReducer;
