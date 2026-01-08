import { useParams } from "react-router-dom";

import React from 'react'

const User = () => {
    
    const { id } = useParams();
    
 return <h2>User ID: {id}</h2>
}

export default User