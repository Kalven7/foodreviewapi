import React, { useReducer } from "react";

let initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type){
        case "aumentar":
        return {...state,counter: state.counter + action.payload}
        default:
            return state 


    }
}

export const Context = React.createContext();

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>

    )
}