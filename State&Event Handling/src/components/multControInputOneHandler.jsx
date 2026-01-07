import React, { useState } from "react";

function MultiplInputForm(){

    const[form,setForm] = useState({name:"",email:""})
    const handlechange = e =>setForm({...form,[e.target.name]:e.target.value});

    return(

        <>
        <input name="name" value={form.name} onChange={handlechange} />
        <input name="email" value={form.email} onChange={handlechange} />
        </>
    );
};

export default MultiplInputForm;