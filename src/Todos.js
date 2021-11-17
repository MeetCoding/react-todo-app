import React, { useReducer, useContext, createContext } from 'react';

const TodosContext = createContext();

const initValue = [];

const reducers = {
    add: (state, payload) => {
        return [...state, payload];
    },
    remove: (state, payload) => {
        const newState = [...state];
        newState.splice(payload, 1);
        return newState;
    }
}

export function useTodos() {
    const [todos, dispatch] = useContext(TodosContext);
    return todos;
}

export function useDispatch() {
    const [todos, dispatch] = useContext(TodosContext);
    return (type, payload) => {
        const action = {
            type,
            payload
        }
        dispatch(action);
    }
}

export function TodosProvider({ children }) {

    function masterReducer(state, action) {
        return reducers[action.type](state, action.payload);
    }

    const TodosState = useReducer(masterReducer,initValue);

    return (
        <TodosContext.Provider value={TodosState}>
            {children}
        </TodosContext.Provider>
    )
}