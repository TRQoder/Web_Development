import React, { useState } from 'react'

const Bg = () => {
    const [color, setColor] = useState('white');
    const handleColorChange = ()=>{
      const newColor =  color==='white'?'lightblue':'white';
      setColor(newColor)
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '2rem', backgroundColor: color, height: '100vh' }}>
            <h1>Click to Change Background Color</h1>
            <button onClick={handleColorChange} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Change Color
            </button>
        </div>
    )
}

export default Bg