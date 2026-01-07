import React, { useState } from "react";

function LoginForm(){
    const[form,setForm] = useState({username:""});

    return(
        <input value={form.username} onChange={e => setForm({username: e.target.value})} />
    );
}

export default LoginForm;