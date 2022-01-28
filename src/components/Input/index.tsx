import React from "react";

interface PropsInput {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  paint?: string | number | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: any;

}

export default function Input(props: PropsInput) {

  return (
    <div className='containerInput'>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-container-object">
      {props.icon && <img className="icon-input" src={props.icon} alt="" />}


      <input
        {...props.register}
        paint={props.paint}
        id={props.id}
        className={`inputField ${props.className ? props.className : ""} ${props.icon ? "withIcon" : ""}`}
        type={props.type}
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
