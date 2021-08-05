
import { types } from '../types/types';
import {getAll, insert } from "../Api";


export const startLoadingOrders = (  ) => {
    return async( dispatch ) => {
        
        const orders = await getAll( );
          console.log(orders)
          dispatch( setOrders( orders ) );

    }
}
export const setOrders = ( orders ) => ({
    type: types.loadOrders,
    payload: orders
});

export const setCountPizza1 = ( count1 ) => ({
    type: types.setCounter1,
    payload: count1
});

export const setCountPizza2 = ( count2 ) => ({
    type: types.setCounter2,
    payload: count2
});

export const startSaveOrder = (  ) => {
    return async( dispatch, getState ) => {
        const { CountPizza1, CountPizza2 } = getState().auth;

        const date = new Date().getTime();

        console.log(date)

        insert(CountPizza1, CountPizza2, date)
        .then(result => {
        if (result.error) {
          return
        } else if (result) {
        
        }
        }).catch((e) => {
            console.log(e)
        });

        dispatch(setCountPizza1(0));
        dispatch(setCountPizza2(0));

        dispatch(startLoadingOrders());
            

        
    }
}
