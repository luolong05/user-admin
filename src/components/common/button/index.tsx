import React from "react";
import ButtonStyled from "./button.styled";

type btnTypes = "default" | "error" | "warning" | "primary";
type btnSizes = "sm" | "md" | "lg";
interface buttonProps {
  type?: btnTypes;
  size?: btnSizes;
  htmlType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<buttonProps> = ({ htmlType, className, children, ...props }) => {
  const getClassNames: () => string[] = () => {
    return [
      className || '',
      `btn-${props.type || "default"}`,
      `btn-${props.size || "md"}`,
    ].filter(item => !!item);
  };

  const classNames: string[] = getClassNames();
  const buttonStyledProps = {
    disabled: props.disabled,
    onClick: props.onClick,
  };

  return (
    <ButtonStyled {...buttonStyledProps} type={htmlType} className={classNames.join(" ")}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
