import React from "react";

function ConditionalList() {
  const items = ["Table", "Chair", "Shelf"];

  return (
    <div style={{color:"violet"}}>
      {items.length > 0 ? (
        items.map(item => <p key={item}>{item}</p>)
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}

export default ConditionalList;
