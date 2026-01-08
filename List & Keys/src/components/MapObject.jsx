import React from "react";

const MapObject = () => {
  const obj = {
    name: "Anjana",
    role: "Developer",
    country: "India"
  };

  return (
    <div>
      {Object.keys(obj).map(key => (
        <p key={key}>
          {key}: {obj[key]}
        </p>
      ))}
    </div>
  );
};

export default MapObject;
