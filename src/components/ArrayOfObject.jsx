import React from "react";

const Users = [{id:1,name:"Anjana"},{id:2,name:"pavan"},{id:3,name:"Anandhu"}];

function UserList(){

    return(
        <div style={{display:"flex",gap:"10px"}}>
            {Users.map(u=><p key={u.id}>{u.name}</p>)}
        </div>
    )
};

export default UserList