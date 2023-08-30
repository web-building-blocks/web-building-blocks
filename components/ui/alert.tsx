// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./counters.module.css";

function MyButton() {
    function handleClick() {
        alert('This is alert!')
    }

    return (
        <div>
            <button onClick={handleClick} className={styles.counter}>
                click here
            </button>
        </div>
    );
}

export default function MyApp() {
    return <MyButton />;
}
