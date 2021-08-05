import {useState} from 'react'

export const useCounter = (initialState = 1) => {

    const [state, setstate] = useState(initialState)

    const reset = () => {
        setstate(initialState);
    }

    const increment = (factor = 1) => {
        setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    return{
        state,
        increment,
        decrement,
        reset
    };

}
