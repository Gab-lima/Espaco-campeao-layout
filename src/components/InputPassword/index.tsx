import React, { useState } from "react";

import "./style.scss"

import EyeOpen from "../../assets/img/eye-open.png"
import EyeClose from "../../assets/img/eye-close.svg"

interface PropsInput {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  placeholder?: string;
  value?: string | number;
  paint?: string | number | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: any;

}

export default function InputPassword(props: PropsInput) {
const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='containerInput'>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-container-object">
      {props.icon && <img className="icon-input" src={props.icon} alt="" />}
      {showPassword
      ? <img className="eye" src={EyeOpen} alt="" onClick={()=> setShowPassword(false)}/>
      : <img className="eye" src={EyeClose} alt="" onClick={()=> setShowPassword(true)}/>}

      <input
        {...props.register}
        paint={props.paint}
        id={props.id}
        className={`inputField ${props.className ? props.className : ""} ${props.icon ? "withIcon" : ""}`}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      
      />
      </div>
      <span className='validate'>{props.error}</span>
    </div>
  );
}
