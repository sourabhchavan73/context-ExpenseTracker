import React, { createContext, useReducer  } from 'react';
import Appreducer from './Appreducer'

//initial state
const initialstate = {
    transctions: []
}

export const GlobalContext = createContext(initialstate );

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer( Appreducer, initialstate );

    // deleter
    function deleteTransction ( id ) {
        dispatch({
            type: 'DELETE_TRANSCTION',
            payload: id
        })
    }

    // add
    function addTransction(transction) {
        dispatch({
            type: 'ADD_TRANSCTION',
            payload: transction
        })
    }


    return (
        < GlobalContext.Provider value = {{ 
            transctions: state.transctions,
            deleteTransction,
            addTransction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}