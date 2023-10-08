import React, { useState } from "react";
import styles from "../../styles/login-page.module.css";

export default function Login() {
    // usestate for form data
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [forgotPassword, setForgotPassword] = useState(false); // New state for the checkbox


    // handle change
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    // handle checkbox change
    const handleCheckboxChange = () => {
        setForgotPassword(!forgotPassword); // Toggle the checkbox state
    };
    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        console.log("username", username);
        console.log("password", password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={handleChange}
                            name="username"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handleChange}
                            name="password"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={forgotPassword}
                            onChange={handleCheckboxChange}
                        />
                        Forgot Password
                    </label>
                    <input type="submit" value="Submit" className={styles.button} />
                </form>
            </div>
        </div>
    );
}
