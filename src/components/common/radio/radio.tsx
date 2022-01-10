import React from 'react';
import { ThemeProvider } from 'styled-components';
import baseComponentsTheme from '@/styles/baseComponents/theme';
import { RadioLabelStyled, RadioTextStyled, RadioStyled } from './radio.styled';

export type RadioValueType = string | number;
export interface RadioProps {
  value?: RadioValueType;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={baseComponentsTheme}>
      <RadioLabelStyled>
        <RadioStyled {...props} />
        <RadioTextStyled disabled={props.disabled}>{children}</RadioTextStyled>
      </RadioLabelStyled>
    </ThemeProvider>
  );
};

export default Radio;
