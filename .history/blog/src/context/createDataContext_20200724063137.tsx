import React, {useReducer, createContext} from 'react';

export default (reducer, actions, initialState) => {
    const Context = createContext(initialState);
};