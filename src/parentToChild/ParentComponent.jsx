import React, { useState } from "react";
import ChildFunction from "./ChildComponent";


const ParentFunction = () => {

    const [first, setFirst] = useState("akshay");
    return (
        <div>
            <h1>parent</h1>
            <ChildFunction name={first} setFirst={setFirst} />
        </div>
    )
}
export default ParentFunction;