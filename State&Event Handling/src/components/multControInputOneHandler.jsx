import React, { useState } from "react";

function MultiplInputForm(){

    const[form,setForm] = useState({name:"",email:""})
    const handleChange = e =>setForm({...form,[e.target.name]:e.target.value});

     const handleSubmit = (e) => {
    e.preventDefault();

     if (form.name.length < 3) {
      alert("Name too short");
      return;
    }

       if (!form.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }


    alert(`Submitted:\nName: ${form.name}\nEmail: ${form.email}`);

}

    return(

       <form onSubmit={handleSubmit}>

         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>

          <button type="submit">Submit</button>
       </form>
    );
};

export default MultiplInputForm;