import React, { useState } from 'react'

const UseStatePractice01 = () => {
    
    const [isOn, setIsOn] = useState(false);
    return (
      <div className='text-center mt-2.5'>
        <h1>{isOn?"On":"Off"}</h1>
        <button onClick={()=> setIsOn((prev)=> !prev) }  className='px-2 py-2 bg-gray-50 mt-3'>
          Toggle
        </button>
      </div>
    );
}

export default UseStatePractice01
