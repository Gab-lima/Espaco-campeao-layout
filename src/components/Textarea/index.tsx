import React from "react";

interface PropsTextarea {
  id?: string;
  name?: string;
  error?: string;
  className?: string;
  register?: any;
  label?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function Textarea(props: PropsTextarea) {
  return (
    <div className='containerTextarea'>
      <label htmlFor={props.name}>{props.label}</label>
        <textarea
          {...props.register}
          id={props.id}
          className={`textareaField ${props.className}`}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
      <span className='validate'>{props.error}</span>
    </div>
  );
}
