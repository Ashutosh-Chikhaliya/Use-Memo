import React, { useState, useMemo } from 'react';
import Child from './Child';

function Parent() {

    console.log("parent re render")

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState(["Learn React", "Learn Redux"]);

    // Memoized version of the to-do list so that the child component doesn't re-render unnecessarily
    const memoizedTodos = useMemo(() => todos, [todos]);

    return (
        <div className="p-6 border-2 border-zinc-600 ">
            <h1 className="text-3xl font-bold mb-4">Parent Component</h1>
            <p className="mb-4 text-2xl">Counter: {counter}</p>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
                className="bg-blue-700 text-white p-3 text-md rounded hover:bg-blue-800"
            >
                Increment Counter
            </button>

            <div className="mt-6">
                <Child todos={memoizedTodos} setTodos={setTodos} />
            </div>
        </div>
    );
}

export default Parent;
