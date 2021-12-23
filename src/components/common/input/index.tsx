import React from "react";
import InputStyled, { InputSizes, InputTypes } from "./input.styled";

export interface InputProps {
  value?: string;
  name?: string;
  htmlType?: string;
  type?: keyof InputTypes;
  size?: keyof InputSizes;
  disabled?: boolean | undefined;
  maxLength?: number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ size, type, htmlType, ...props }) => {
  const inputStyledProps = {
    ...props,
    id: props.name,
    inputSize: size || 'md',
    inputType: type || 'default',
    type: htmlType,
  };

  return <InputStyled {...inputStyledProps} />
}

export default Input;
