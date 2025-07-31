import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Tudu from './component/Tudu';
import Show from './component/Show';
import Test from './component/Test';
import Project from './component/Project';
import Projectime from './component/Projectime';

function App() {
  return (
    <div>
      <Tudu/>
      {/* <Navbar />
      <Routes>
        <Route path="/tudu" element={<Tudu />} />
        <Route path="/show" element={<Show />} />
        <Route path="/test" element={<Test />} />
      </Routes> */}
      {/* <Project/> */}
      <Projectime/>
    </div>
  );
}

export default App;
