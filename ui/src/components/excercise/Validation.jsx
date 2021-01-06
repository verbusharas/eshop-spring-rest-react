import React, {useEffect, useState} from "react";

const Validation = ({messages}) => {
    const [isLoading, setIsLoading] = useState(true);

    const red = {backgroundColor: "red", color:"white", padding:"5px"};
    const loadingMessage = "Validating...";
    const loadingTime = 1000;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, loadingTime)
    })

    const renderError = (err) => {
        return err.length > 0 && <p style={red}>{err}</p>
    }

    return (
        <div>
           {isLoading ? <p>{loadingMessage}</p> : messages.map(renderError)}
        </div>
    );
}

export default Validation;