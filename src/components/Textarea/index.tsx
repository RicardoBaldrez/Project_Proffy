import React, { TextareaHTMLAttributes } from "react";

import './style.css'

// extends TextareaHTMLAttributes<HTMLTextareaElement> -> Lista de attr's que uma elemento HTML pode receber
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// ...rest -> responsável por podermos colocar qualquer attr existente nas tags html
const Textarea: React.FunctionComponent<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={ name }>{ label }</label>
            <textarea id={ name } { ...rest } />
        </div>
    );
}

export default Textarea;