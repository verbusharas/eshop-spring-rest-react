import React, {useEffect, useState} from "react";

export default ({text}) => {
    const [isLoading, setLoader] = useState(true);
    const [extraText, setExtraText] = useState("");

    useEffect(() => {
        console.log("mounted...")

        setTimeout(() => {
            setLoader(false);
        }, 2000);

        if (text === "ok") {
            setExtraText("!!! ATIDENGĖTE SLAPTĄ TEKSTĄ !!!");
        }

        return () => {
            console.log("log from return - -");
        }
    });

    return (
        <div>
            {isLoading && <span>Kraunasi...</span>}
            Užkrauta! Perduotas tekstas su functional component: {text}
            {extraText.length > 0 && <span>{extraText}</span>}
        </div>
    );
}