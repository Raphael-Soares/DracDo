import React from "react";
import "../styles/components/Input.scss";
function Input({name, id, placeholder, label, type}) {
    return (
        <span className="input">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} id={id} />
        </span>
    );
}

export default Input;
