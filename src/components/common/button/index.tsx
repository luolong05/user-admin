import React from "react";
import ButtonStyled, { ButtonSizes, ButtonTypes } from "./button.styled";

type btnTypes = keyof ButtonTypes;
type btnSizes = keyof ButtonSizes;
interface ButtonProps {
  type?: btnTypes;
  size?: btnSizes;
  htmlType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ htmlType, children, ...props }) => {
  const buttonStyledProps = {
    ...props,
    size: props.size || 'md',
    btnType: props.type || 'default',
    type: htmlType
  };

  return (
    <ButtonStyled {...buttonStyledProps} type={htmlType}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
