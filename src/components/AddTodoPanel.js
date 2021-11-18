import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from './../Todos';

export default function AddTodoPanel() {

    const dispatch = useDispatch();
    const [content, _setContent] = useState("");
    const contentRef = useRef(content);
    const setContent = newContent => {
        _setContent(newContent);
        contentRef.current = newContent;
    }

    const addTodo = useCallback(() => {
        if (contentRef.current) 
            dispatch("add", contentRef.current);
        setContent("");
    }, [dispatch])

    useEffect(() => {
        window.addEventListener("keydown", e => {
            if(e.key === "Enter")
                addTodo();
        })
    }, [addTodo])

    return (
        <div className="flex items-center bg-white p-5 rounded-md border-yellow border-l-8">
            <input
                type="text"
                name="add"
                id="add"
                value={content}
                onChange={e => setContent(e.target.value)}
                className="flex-grow flex-shrink min-w-0 mx-4 py-2 px-4 rounded-md font-shippori border-dark-purple focus:border-2"
            />
            <button
                onClick={addTodo}
                className="px-4 py-2 bg-dark-purple rounded-md  text-white font-montserrat font-bold"
            >Add</button>
        </div>
    )
}