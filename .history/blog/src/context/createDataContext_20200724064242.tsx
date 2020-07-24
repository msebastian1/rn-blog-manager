import React, { useReducer, createContext } from 'react';

export default (reducer, actions, initialState) => {
    const Context = createContext(initialState);

    // actions === {addBlogPost: (dispatch) => { return () => {} } }
    cousnt boundActions = {};

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return <Context.Consumer value={{ state }}>
            {children}
        </Context.Consumer>
    }

    return { Context, Provider };
};