import styled from "styled-components";
import globalTheme from "@/styles/global/theme";
import baseComponentsTheme from "@/styles/baseComponents/theme";

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
  sm: baseComponentsTheme.inputPaddingSm,
  md: baseComponentsTheme.inputPaddingMd,
  lg: baseComponentsTheme.inputPaddingLg,
};
const inputFontSize: InputSizes = {
  sm: baseComponentsTheme.fontSizeSm,
  md: baseComponentsTheme.fontSizeMd,
  lg: baseComponentsTheme.fontSizeLg,
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
  border-color: ${baseComponentsTheme.formFieldBorderColorDisabled};
  background-color: ${baseComponentsTheme.formFieldBgColorDisabled};
  color: ${baseComponentsTheme.formFieldFontColorDisabled};
  cursor: not-allowed;
`;

export default styled.input<InputStyledCustomProps>`
  border: 1px solid ${props => inputBorderColor[props.inputType]};
  padding: ${props => inputPadding[props.inputSize]};
  width: 100%;
  background-color: ${props => props.theme.backgroundDefaultColor};
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