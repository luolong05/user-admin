import React from "react";
import { ThemeProvider } from "styled-components";
import baseComponentsTheme from "@/styles/baseComponents/theme";
import { RadioLabelStyled, RadioTextStyled, RadioStyled } from "./radio.styled";

export type RadioValue = string | number;
export interface RadioProps {
  value?: RadioValue;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({children, ...props}) => {

  return <ThemeProvider theme={baseComponentsTheme}>
    <RadioLabelStyled>
      <RadioStyled {...props} />
      <RadioTextStyled disabled={props.disabled} >{children}</RadioTextStyled>
    </RadioLabelStyled>
  </ThemeProvider>
};

export default Radio;