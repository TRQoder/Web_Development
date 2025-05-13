import React, { useState } from 'react'

const FormValidator = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const handleSubmit = () => {
        if (name === '') {
            setError("Name can't be empty");
        } else {
            setError('');
            alert(`Hello ${name}`);

        }
    }
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h1>Enter your name</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                {error && <p className='text-red-500'>{error}</p>}

                <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Submit
                </button>
            </div>
            );
        </>
    )
}

export default FormValidator