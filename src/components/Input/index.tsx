import React, { InputHTMLAttributes } from "react";

import './style.css'

// extends InputHTMLAttributes<HTMLInputElement> -> Lista de attr's que uma elemento HTML pode receber
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// ...rest -> responsável por podermos colocar qualquer attr existente nas tags html
const Input: React.FunctionComponent<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={ name }>{ label }</label>
            <input id={ name } type="text" { ...rest } />
        </div>
    );
}

export default Input;