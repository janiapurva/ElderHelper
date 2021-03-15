export const SET_USERS = 'SET_USERS';
export const SET_LOGIN = 'SET_LOGIN';

const dataReducer = (state, action) => {
    
    switch (action.type) {
    
        case SET_USERS:
    
        return {
                ...state,
                users: action.users,
                    loading: false,
            };
        default:
            return state;


        // case SET_LOGIN:
    
        // return {
        //         ...state,
        //         users: action.users,
        //             loading: false,
        //     };
        // default:
        //     return state;    
    }
};

export default dataReducer;