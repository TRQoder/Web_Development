import React, { useState } from 'react'

const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const toggleLogin = ()=>{
  //   setIsLogin(prev => !prev)
  // }
  return (
     <div className="text-center mt-10">
      <button onClick={()=>{setIsLogin(!isLogin)}} className="bg-blue-500 text-white px-4 py-2">
        {isLogin ? "Logout" : "Login"} 
      </button>
    </div>
  )
}

export default ConditionalRendering