import React, { useReducer, useContext, createContext } from 'react';

const TodosContext = createContext();

const initValue = [
    {
        content: "complete english project",
        completed: true
    },
    {
        content: "complete maths project",
        completed: false
    }
];

const reducers = {
    add: (state, content) => {
        return [...state, {content, completed: false}];
    },
    remove: (state, index) => {
        const newState = [...state];
        newState.splice(index, 1);
        return newState;
    },
    editComplete: (state, {index, complete}) => {
        const newState = [...state];
        newState[index].completed = complete;
        return newState;
    }
}

export function useTodos() {
    const todos = useContext(TodosContext)[0];
    return todos;
}

export function useDispatch() {
    const dispatch = useContext(TodosContext)[1];
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