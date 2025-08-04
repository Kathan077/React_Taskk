import { useState } from 'react'
import React, { useEffect } from 'react'

export const Play = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning]  = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handldplay = () => {
        setIsRunning(true);
    };
    const handlePause = () => {
        setIsRunning(false);
    };
    const handlestop  = () => {
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handldplay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handlestop}>Stop</button>
        </div>
    );
};
export default Play


// import React, { useState, useEffect } from 'react';

// export const Play = () => {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;

//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setCount(prev => prev + 1);
//       }, 1000);
//     }

//     // Cleanup function
//     return () => clearInterval(intervalId);
//   }, [isRunning]);

//   const handlePlay = () => {
//     setIsRunning(true);
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//     setCount(0);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Count: {count}</h1>
//       <button onClick={handlePlay} disabled={isRunning}>Play</button>
//       <button onClick={handlePause} disabled={!isRunning}>Pause</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// };
