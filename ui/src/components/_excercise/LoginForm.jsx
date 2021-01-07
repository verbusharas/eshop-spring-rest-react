import React, {useState, useEffect} from "react";
import Validation from "./Validation";

const errorUsernameLength = "ERROR: Username must be between 3 and 15 symbols long";
const errorPasswordLength = "ERROR: Password must be at least 5 symbols long";

const LoginForm = () => {

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const validateUsername = (username) => {
        if (username.length < 3 || username.length > 15) return errorUsernameLength;
        return "";
    }

    const validatePassword = (password) => {
        if (password.length < 5) return errorPasswordLength;
        return "";
    }

    const handleSubmit = e => {
        setErrors([validateUsername(username), validatePassword(password)]);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br/>
            <input type="text" value={username} onChange={handleUsernameChange}/>
            <br/>
            <label>Password:</label>
            <br/>
            <input type="password" value={password} onChange={handlePasswordChange}/>
            <br/>
            <button>Login</button>
            {errors.length > 0 && <Validation messages={errors}/>}
        </form>
    );
}

export default LoginForm;