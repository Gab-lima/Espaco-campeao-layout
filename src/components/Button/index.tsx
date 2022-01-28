import React from "react";

interface PropsButton {
  id?: string;
  disabled?: boolean;
  className?: string;
  children?: any;
  type?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: PropsButton) {
  return (
    <button 
      type={props.type}
      id={props.id}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
}
