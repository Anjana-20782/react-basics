import React, { useState } from 'react';
import '../index.css'; // Make sure you have CSS for .active and .inactive

const DynamicCssClasses = () => {
  const [items, setItems] = useState([
    { name: "Shirt", active: true },
    { name: "Pants", active: false },
    { name: "Dress", active: true },
    { name: "Skirt", active: false },
    { name: "Jacket", active: true },
  ]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={item.active ? "active" : "inactive"}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default DynamicCssClasses;
