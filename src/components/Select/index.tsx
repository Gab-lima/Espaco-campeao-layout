import React from "react";

interface PropsSelect {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  placeholder?: string;
  value?: string | number;
  children?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}


export default function Select(props: PropsSelect) {
  return (
    <div className='containerInput select'>
      <label htmlFor={props.name}>{props.label}</label>
        <select
          {...props.register}
          id={props.id}
          className={`inputField ${props.className}`}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        >
          {props.placeholder && <option value="">{props.placeholder}</option>}
          {props.children}
        </select>
      <span className='validate'>{props.error}</span>
    </div>
  );
}
