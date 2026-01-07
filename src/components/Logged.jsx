import React from "react";

function User({isLoggedIn}){
   return <h1>{isLoggedIn ? "Logged In" : "Guest"}</h1>
}

export default User;