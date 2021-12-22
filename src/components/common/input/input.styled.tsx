import styled from "styled-components";
import globalTheme from "@/styles/global/theme";

export interface InputSizes {
  sm: string;
  md: string;
  lg: string;
}

export interface InputTypes {
  default: string;
  error: string;
  success: string;
}

export interface InputStyledCustomProps {
  inputType: keyof InputTypes;
  inputSize: keyof InputSizes;
}

const inputPadding: InputSizes = {
  sm: '4px 2px',
  md: '6px 4px',
  lg: '8px 6px'
};
const inputFontSize: InputSizes = {
  sm: '12px',
  md: globalTheme.textDefaultFontSize,
  lg: '16px',
};
const inputBorderColor: InputTypes = {
  default: globalTheme.colorDefault,
  error: globalTheme.colorError,
  success: globalTheme.colorSuccess,
};
const inputFocusBorderColor: InputTypes = {
  default: globalTheme.colorPrimary,
  error: globalTheme.colorError,
  success: globalTheme.colorSuccess,
};

const inputDisabledStyle = `
  border-color: #ddd;
  background-color: #e8e8e8;
  color: #bdbdbd;
  cursor: not-allowed;
`;

export default styled.input<InputStyledCustomProps>`
  border: 1px solid ${props => inputBorderColor[props.inputType]};
  padding: ${props => inputPadding[props.inputSize]};
  width: 100%;
  background-color: #fff;
  color: ${props => props.theme.textDefaultColor};
  font-size: ${props => inputFontSize[props.inputSize]};
  border-radius: 2px;
  &:focus {
    border-color: ${props => inputFocusBorderColor[props.inputType]};
  }
  &[disabled] {
    ${inputDisabledStyle}
    &:focus {
      ${inputDisabledStyle}
    }
  }
`