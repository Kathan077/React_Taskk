import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/tudu">tudu</Link>
      <Link to="/show">Show</Link>
      <Link to="/test">test</Link>
    </div>
  );
}
