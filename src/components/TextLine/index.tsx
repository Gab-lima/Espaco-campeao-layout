import React from "react";
import "./style.scss"

interface PropsTitleLine {
 title: string;
}

export default function TextLine(props: PropsTitleLine) {
  return (
    <div className="text-content mb-10">
      <span className="line"></span>
      <p>{props.title}</p>
    </div>
  );
}
