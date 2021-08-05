import { types } from '../types/types';

const initialState = {
    orders: [],
    CountPizza1: 0,
    CountPizza2: 0,
}

export const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
                return { }

        case types.loadOrders:
            return {
                ...state,
                orders: [ ...action.payload ]
            }
        case types.setCounter1:
            return {
                ...state,
                CountPizza1: action.payload 
            }   
        case types.setCounter2:
            return {
                ...state,
                CountPizza2: action.payload 
            }      
    
        default:
            return state;
    }

}