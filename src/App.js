import React, { useState } from 'react';
import SearchPanel from './components/SearchPanel';
import TodosPanel from './components/TodosPanel';
import AddTodoPanel from './components/AddTodoPanel';

export default function App() {

    const [searchQuery, setSearchQuery] = useState("");
    const [showCompleted, setShowCompleted] = useState(true);

    return (
        <div className="w-screen h-screen max-w-xl py-6 px-4 flex flex-col">
            <SearchPanel setSearchQuery={setSearchQuery} setShowCompleted={setShowCompleted} />
            <TodosPanel searchQuery={searchQuery} showCompleted={showCompleted} />
            <AddTodoPanel />
        </div>
    );
}