import React from 'react';
import SearchPanel from './components/SearchPanel';
import TodosPanel from './components/TodosPanel';
import AddTodoPanel from './components/AddTodoPanel';

export default function App() {
    return (
        <div className="">
            <SearchPanel />
            <TodosPanel />
            <AddTodoPanel />
        </div>
    );
}