import React from "react";
import clsx from "clsx";
import "./Button.css";

export interface ButtonProps {
  variant?: "primary" | "outlined" | "pill" | "text";
  color?: "primary" | "success" | "error" | "warning";
  size?: "small" | "medium" | "large" | "full";
  clickFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
  const { variant, clickFunction, children, size, color, type, style } = props;
  const classProps: string = clsx("basic__btn", {
    btn__large: size === "large",
    btn__small: size === "small",
    "w-full": size === "full",
    error: color === "error",
    success: color === "success",
    warning: color === "warning",
    outlined: variant === "outlined",
    text: variant === "text",
    pill: variant === "pill",
  });
  return (
    <button style={style} type={type} onClick={clickFunction} className={classProps}>
      {children}
    </button>
  );
};

export default Button;
