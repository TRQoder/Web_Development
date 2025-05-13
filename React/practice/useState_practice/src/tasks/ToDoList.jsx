import React from 'react'

const ToDoList = () => {
  let todo = ["Buy groceries","groceries","boom","hot"]
  return (
     <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <ul className="list-disc list-inside">
        {todo.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList