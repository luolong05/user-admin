import React from "react";
import ButtonStyled from "./button.styled";

type btnTypes = "default" | "error" | "warning" | "primary";
type btnSizes = "sm" | "md" | "lg";
interface buttonProps {
  type?: btnTypes;
  size?: btnSizes;
  disabled?: boolean | undefined;
  className?: string;
  onClick: (event: any) => void;
}

const Button: React.FC<buttonProps> = ({ className, children, ...props }) => {
  const getClassNames = () => {
    return [
      className,
      `btn-${props.type || "default"}`,
      `btn-${props.size || "md"}`,
    ];
  };

  const classNames = getClassNames();
  const buttonStyledProps = {
    disabled: props.disabled,
    onClick: props.onClick,
  };

  return (
    <ButtonStyled {...buttonStyledProps} className={classNames.join(" ")}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
