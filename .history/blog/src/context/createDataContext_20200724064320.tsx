import React, { useReducer, createContext } from 'react';

export default (reducer, actions, initialState) => {
    const Context = createContext(initialState);

    // actions === {addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions){
        boundActions[key]: actions[key](dispatch)
    }

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return <Context.Consumer value={{ state }}>
            {children}
        </Context.Consumer>
    }

    return { Context, Provider };
};