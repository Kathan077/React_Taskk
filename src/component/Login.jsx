import React, { useState, useEffect } from 'react';

function LoginLogout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

  
    useEffect(() => {
        document.body.style.backgroundColor = isLoggedIn ? 'black' : 'white';
        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, [isLoggedIn]);


    const style1 = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        textAlign: 'center',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: isLoggedIn ? '#333' : '#f8f9fa',
        color: isLoggedIn ? 'white' : 'black' 
    };

    const style2 = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '8px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none'
    };

    return (
        <div style={style1}>
            <h2>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h2>
            <button onClick={toggleLogin} style={style2}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default LoginLogout;

