import React from "react";

function ConditionalList() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      {items.length > 0 ? (
        items.map(item => <p key={item}>{item}</p>)
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}

export default ConditionalList;
