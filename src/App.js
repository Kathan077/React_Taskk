import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Tudu from './component/Tudu';
import Show from './component/Show';
import Test from './component/Test';
import Product from './component/Product';
import Project from './component/Project';
import Projectime from './component/Projectime';
import Jewellery from './component/Jewellery';
import Electronic from './component/Electronic';
import Mul from './component/Mul';
import Play from './component/Play';
import Obj from './component/Obj';
import Parta from './component/Parta';
import Login from './component/Login';
import Perfect from './component/Perfect';
import Todoloc from './component/Todoloc';



function App() {
  return (
    <div>
      <Navbar />

      {/* <Routes>
        <Route path="/tudu" element={<Tudu />} />
        <Route path="/show" element={<Show />} />
        <Route path="/test" element={<Test />} />

        <Route path="/product" element={<Product />}> */}
          {/* {/* <Route path="electronic" element={<Electronic />} />
          <Route path="jewellery" element={<Jewellery />} /> */}
        {/* </Route> */}
      {/* </Routes> */} 

{/* <Perfect/> */}
<Todoloc/>
 <Routes>
  <Route path='/Play' element={<Play/>}/>
  <Route path='/Mul' element={<Mul/>}/>
  <Route path='/Obj' element={<Obj/>}/>

    <Route path='/Parta' element={<Parta/>}>
      <Route path='Show'  element={<Show/>}/>
      <Route path='Login'  element={<Login/>}/>
    </Route>
 </Routes>
    </div>
  );
}

export default App;
