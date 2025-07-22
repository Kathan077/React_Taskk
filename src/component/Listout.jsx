import React from 'react';

const Listout = (Props) => {
  return (
    <div>
      <ul>
        {
          Props.list.map((item, i) => (
            <li key={i}>Name: {item.name}, Age: {item.age}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Listout;
