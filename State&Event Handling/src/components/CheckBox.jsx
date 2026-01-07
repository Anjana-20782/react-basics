import React, { useState } from "react";

function CheckBoxDemo(){

    const[checked,setChecked] = useState(false);
    return <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.value)} />
};

export default CheckBoxDemo;