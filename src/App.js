import React from 'react';
import Count from './component/Count';
import { Play } from './component/Play';
import { Par } from './component/Par';
import Ffetch from './component/Ffetch';
import Ffetch2 from './component/Ffetch2';
import { Timer } from './component/Timer';
import { Timerpar } from './component/Timerpar';
import {Por} from './component/Por'
import Todo from './component/Todo';
import { Todoref } from './component/Todoref';
import { Form_val } from './component/Form_val';
import Tudu from './component/Tudu';

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

      {/* <Count/>
      <Play/>
      <Par/> */}
      {/* <Ffetch/> */}
      {/* <Ffetch2/> */}
      {/* <Timer/> */}
      {/* <Timerpar/> */}
      {/* <Todo/> */}
    {/* <Por/> */}
       {/* <Todoref/>

   */}
   <Todo/>
   {/* <Tudu/> */}
   {/* <Form_val/> */}
    </div>
  );
};

export default App;
