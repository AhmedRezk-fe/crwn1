import React from "react";
import "./formInput.style.scss";

const FormInput = ({ HandelChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={HandelChange} {...otherProps} />

        {
            label ? (
                <label className={`${
                    otherProps.value.length ? "shrink" : ""} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)

export default FormInput;