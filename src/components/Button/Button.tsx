import { ComponentProps } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
