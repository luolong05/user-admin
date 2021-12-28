import React from "react";
import {ThemeProvider} from "styled-components";
import baseComponentsTheme from "@/styles/baseComponents/theme";
import {OptionStyled} from "./option.styled";

export type OptionValueTypes = string | number;
interface OptionProps {
  value: OptionValueTypes;
  disabled?: boolean | undefined;
  onClick?: (value: OptionValueTypes) => void
}

const Option: React.FC<OptionProps> = ({children, ...props}) => {
  const handleOptionClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void = () => {
    if (props.disabled) {
      return;
    }

    if (typeof props.onClick === 'function') {
      props.onClick(props.value);
    }
  };

  return <ThemeProvider theme={baseComponentsTheme}>
    <OptionStyled disabled={props.disabled} onClick={handleOptionClick}>{children}</OptionStyled>
  </ThemeProvider>
};

export default Option;
