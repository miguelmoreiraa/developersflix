import React from 'react';

function FormField({ label,type, value, onChange, name }) {
    return (
        <div>
            <label>
                {label} : 
                 <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name} // Esta linha faz que vodê receba o nome dinamicamente
                />
            </label>
        </div>
    )
}
export default FormField;