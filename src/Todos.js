import React, { useReducer, useContext, createContext } from 'react';

const TodosContext = createContext();

const initValue = [];

const reducers = {

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
        reducers[action.type](state, action.payload);
    }

    const TodosState = useReducer(masterReducer,initValue);

    return (
        <TodosContext.Provider value={TodosState}>
            {children}
        </TodosContext.Provider>
    )
}