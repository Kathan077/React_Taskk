// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <Link to="/tudu">tudu</Link>
//       <Link to="/show">Show</Link>
//       <Link to="/test">test</Link>
//       {/* <Link to="/product">Product</Link> */}
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/Play">play</Link>
      <Link to="/Mul">Mul</Link>
      <Link to="/Obj">Obj</Link>
      <Link to="/Parta">Parta</Link>

    </div>
  );
};

export default Navbar;
