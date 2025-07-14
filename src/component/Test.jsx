// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from "react";

// function Test() {
//   const [arr, setNo] = useState([
//     { name: "Apple", price: "50" },
//     { name: "Banana", price: "20" },
//     { name: "Milk", price: "40" },
//     { name: "Bread", price: "30" },
//     { name: "Eggs", price: "60" }
//   ]);

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-3">Product List</h3>
//       <ul className="list-group">
//         {
//           arr.map((item, index) => ( 
//             <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//               <span>Product: <strong>{item.name}</strong></span>
//               <span>Price: ₹{item.price}</span>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';

// function FaqToggle() {
//     const [isShow, setShow] = useState(false);

//     const toggle = () => {
//         setShow(prev => !prev);
//     };

//     const st = {
//       maxWidth: '600px',
//       margin: '40px auto',
//       padding: '32px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '12px',
//       boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
//       backgroundColor: '#fefefe'
//   };

//     return (
//         <div style={st}>
//             <h3 onClick={toggle}>
//                 my name is ??
//             </h3>
//             {isShow && (
//                 <p style={st}>
//                     KATHAN
//                 </p>
//             )}
//         </div>
//     );
// }

// export default FaqToggle;
import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "Components are the building blocks of a React application's UI.",
  },
  {
    id: 3,
    question: "What is useState?",
    answer: "useState is a React Hook that lets you add state to functional components.",
  },
];

function FaqList() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2> FAQ</h2>
      {faqData.map((faq) => (
        <div key={faq.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <h4
            style={{ cursor: 'pointer' }}
            onClick={() => toggle(faq.id)}
          >
            {faq.question} {openId === faq.id }
          </h4>
          {openId === faq.id && (
            <p style={{ marginTop: '8px' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqList;