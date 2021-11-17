import React from 'react';
import SearchPanel from './components/SearchPanel';
import TodosPanel from './components/TodosPanel';
import AddTodoPanel from './components/AddTodoPanel';

export default function App() {
    return (
        <div className="w-screen h-screen max-w-xl py-14 flex flex-col">
            <SearchPanel />
            <TodosPanel />
            <AddTodoPanel />
        </div>
    );
}