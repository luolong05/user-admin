import React from "react";
import InputStyled, { InputSizes, InputTypes } from "./input.styled";

export interface InputProps {
  value?: string;
  name?: string;
  htmlType?: string;
  type?: keyof InputTypes;
  size?: keyof InputSizes;
  maxLength?: number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

const Input: React.FC<InputProps> = ({ size, type, htmlType, ...props }) => {
  const inputStyledProps = {
    ...props,
    inputSize: size || 'md',
    inputType: type || 'default',
    type: htmlType,
    autoComplete: 'off',
  };

  return <InputStyled {...inputStyledProps} />
}

export default Input;
