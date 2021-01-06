import React, {useState} from "react";
import ResultMessage from "./ResultMessage";

const Controlled = () => {

    const usernameInfoText = "Prisijungimo vardas:";
    const passwordInfoText = "Slaptažodis:";
    const buttonText = "SPAUSTI";

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [messageText, setMessageText] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        username && password ? setMessageText("OK") : setMessageText("KLAIDA, prasau uzpildyti");
        console.log("UN: " + username);
        console.log("PW: " + password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>{usernameInfoText}</label>
            <br/>
            <input
                type="text"
                name="username"
                onChange={handleUsernameChange}
                value={username}
            />
            <br/>
            <label>{passwordInfoText}</label>
            <br/>
            <input
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
            />
            <br/>
            <button>{buttonText}</button>
            {messageText.length > 0 && <ResultMessage message={messageText}/>}
        </form>
    )
}


export default Controlled;