import React from "react";
import "./scss/Button.scss";

type ButtonProps = {
  children: any;
  styles?: string;
  onClick?: any;
};

export default function Button({ children, styles, onClick }: ButtonProps) {
  return (
    <button className={`btn ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}
