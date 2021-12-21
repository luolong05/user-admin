import React from "react";
import InputStyled from "./input.styled";

interface inputProps {
  value?: string;
  id?: string;
  name?: string;
  htmlType?: string;
  type?: string;
  size?: string;
  disabled?: boolean | undefined;
  className?: string | undefined;
  maxLength?: number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({ size, className, type, htmlType, ...props }) => {
  const getClassNames: () => string[] = () => {
    return [
      className || '',
      `input-${type || "default"}`,
      `input-${size || "md"}`,
    ].filter(item => !!item);
  };

  const classNames: string[] = getClassNames();

  return <InputStyled {...props} type={htmlType} className={classNames.join(' ')} />
}

export default Input;
