import React, {useState, useEffect} from "react";

const Effect = () => {
    const prefix = "Mano vardas yra";
    const suffix = "Šarūnas Verbus";
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    })

    return (
        <div>
            <p>{isLoading ? prefix + "..." : prefix + " " + suffix}</p>
        </div>
    )
}
 export default Effect;