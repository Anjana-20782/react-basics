import React from "react";

function ListUnique(){

     const users = [
    { id: 1, name: "Anjana" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Meera" }
  ];

    return(
        <div>
            {users.map(u=>
                (<p key={u.id}>{u.name}</p>

                ))}
        </div>
    )
}

export default ListUnique