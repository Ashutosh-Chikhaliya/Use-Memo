import React, { useState } from 'react';

// Wrap the Child component with React.memo to avoid unnecessary re-renders
const Child = React.memo(({ todos, setTodos }) => {

    console.log('Child re-rendered');
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    return (
        <div className="bg-zinc-600 p-4 rounded shadow-md text-white">
            <h2 className="text-lg font-bold mb-4">Child Component</h2>
            <p className='text-xl font-bold mb-2'>TO DO List</p>

            <ul className="mb-4">
                {todos.map((todo, index) => (
                    <li key={index} className="mb-2">
                        {todo}
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New To-Do"
                className="border p-3 mr-2 rounded text-black"
            />
            <button
                onClick={handleAddTodo}
                className="bg-orange-600 text-white p-3 rounded hover:bg-orange-500"
            >
                Add To-Do
            </button>
        </div>
    );
});

export default Child;
