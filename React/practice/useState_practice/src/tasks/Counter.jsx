import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0);
    const increase = ()=>{
        setCount(Count+1);
    }
    const decrease = ()=>{
        setCount(prev => prev-1);
    }
    const reset = ()=>{
        setCount(0);
    }
  return (
   <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Count: {Count}</h1>
      <button onClick={increase} className="bg-blue-500 text-white px-4 py-2 mr-2">
        Increment
      </button>
      <button onClick={decrease} className="bg-red-500 text-white px-4 py-2">
        Decrement
      </button>
    </div>
  )
}

export default Counter