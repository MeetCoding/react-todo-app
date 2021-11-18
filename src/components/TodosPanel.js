import React from 'react';
import { useTodos, useDispatch } from './../Todos';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function TodosPanel(props) {

    const todos = useTodos();

    const filteredTodos = todos.filter(todo => {
        if (!props.showCompleted && todo.completed) return false;
        return todo.content.includes(props.searchQuery);
    })

    const TodosComponent = [];
    for (let i in filteredTodos) {
        TodosComponent.push(
            <Todo key={i} todo={filteredTodos[i]} index={i} />
        )
    }

    return (
        <div className="flex-grow flex flex-col overflow-y-scroll no-scrollbar divide-y-4 divide-purple divide-dashed my-4 rounded-md">
            {TodosComponent}
        </div>
    )
}

function Todo({ todo, index }) {

    const dispatch = useDispatch();

    const changeCompleted = e => {
        const payload = {
            index,
            complete: e.target.checked
        }
        dispatch("editComplete", payload);
    }

    return (
        <div className="flex items-center px-2 py-4">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={changeCompleted}
                className="w-5 h-5"
            />
            <h1 className="flex-grow mx-4">{todo.content}</h1>
            <button onClick={() => dispatch("remove", index)}>
                <RiDeleteBin6Line className="w-5 h-5"/>
            </button>
        </div>
    )
}