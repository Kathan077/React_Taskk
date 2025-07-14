import { useState } from 'react';
import Test from './component/Test';
import Login from './component/Login';
import Pass from './component/Pass';
import Listout from './Listout';
import Show from './Show';
import Tudu from './Tudu';
import Countt from './Countt';
import { Mul } from './Mul';
import Counttt from './Counttt';
import Multiple_input from './Multiple_input';
import User from './User';
import Light_Dark from './Light_Dark';
import Counter_without_class from './Counter_without_class';

let App = () => {
  // let [count, setCount] = useState(0);
  // let [list, setList] = useState([
  //   { name: "Kathan", age: 18},
  //   { name: "meet", age: 20},
  //   { name: "smit", age: 22}
  // ]);

  // let Increment = () => {
  //   setCount(count + 1);
  // };

  // let Decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // let Reset = () => {
  //   setCount(0);
  // };

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button> */}

      {/* <Test />
      <Login />
      <Show />
      <Pass /> 
      <Listout list={list} />
     <Tudu/>
    // < Countt/> */
   }
    {/* <Tudu/> */}
    <Counttt/>
   {/* < Multiple_input/> */}
< Light_Dark />
   
     <Mul/> 
     <Counter_without_class/>
    </div>
  );
};

export default App;
