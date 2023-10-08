import React, { useState } from "react";
import styles from "../../styles/Signup.module.css"; // Import the CSS file

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic, e.g., send data to the server or perform client-side validation
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Password:", password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.signupBox}>
                <h1 className={styles.title}>Signup</h1>
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
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            name="email"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Phone Number:
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
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
                    <input type="submit" value="Sign Up" className={styles.button} />
                </form>
            </div>
        </div>
    );
}
