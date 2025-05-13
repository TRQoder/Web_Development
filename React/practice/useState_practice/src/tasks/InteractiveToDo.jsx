import React, { useState } from 'react'

const InteractiveToDo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTodo([...todo, input]);
        setInput("");
    }
    const handleDelete = (indexToDelete)=>{
        setTodo(todo.filter((_,index) => index !== indexToDelete))
    }
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Todo List</h2>
            <form className="mb-4">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    className="border px-3 py-1 mr-2"
                    placeholder="Enter new todo"
                />
                <button type='submit' onClick={submitHandler} className="bg-green-500 text-white px-3 py-1">Add</button>
            </form>
            <ul className="list-disc list-inside">
                {todo.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{item}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </li>

                ))}
            </ul>
        </div>

    )
}

export default InteractiveToDo