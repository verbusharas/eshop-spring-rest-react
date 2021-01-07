import React, {useRef, useState} from "react";

const Uncontrolled = () => {

    const labelText = "Info tekstas";
    const buttonText ="SPAUSTI";
    const ref = useRef(null);

    const [printedValue, setPrintedValue] = useState("Čia bus pavaizduota jūsų įvesta reikšmė");


    const handleSubmit = (e) => {
        e.preventDefault();
        setPrintedValue(ref.current.value);
        console.log("REF: " + ref.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>{labelText}</label>
            <input
            type="text"
            name="username"
            ref={ref}
            />
            <button>{buttonText}</button>
            <p>{printedValue}</p>
        </form>
    )
}


export default Uncontrolled;