import styled from "styled-components";
import globalTheme from "@/styles/global/theme";
import baseComponentsTheme from "@/styles/baseComponents/theme";

export interface ButtonSizes {
  sm: string;
  md: string;
  lg: string;
}

export interface ButtonTypes {
  default: string;
  primary: string;
}

export interface ButtonStyledCustomProps {
  btnType: keyof ButtonTypes;
  size: keyof ButtonSizes;
}

const buttonPadding: ButtonSizes = {
  sm: baseComponentsTheme.buttonPaddingSm,
  md: baseComponentsTheme.buttonPaddingMd,
  lg: baseComponentsTheme.buttonPaddingLg,
};
const buttonFontSize: ButtonSizes = {
  sm: baseComponentsTheme.fontSizeSm,
  md: baseComponentsTheme.fontSizeMd,
  lg: baseComponentsTheme.fontSizeLg,
};
const buttonBorderColor: ButtonTypes = {
  default: globalTheme.colorDefault,
  primary: globalTheme.colorPrimary,
};
const buttonBackgroundColor: ButtonTypes = {
  default: globalTheme.colorDefault,
  primary: globalTheme.colorPrimary,
};
const buttonHoverBackgroundColor: ButtonTypes = {
  default:  globalTheme.colorDefaultActive,
  primary: globalTheme.colorPrimaryActive,
};
const buttonFontColor: ButtonTypes = {
  default: globalTheme.textDefaultColor,
  primary: globalTheme.colorDefaultActive,
};
const buttonDisabledStyle = `
  border-color: ${baseComponentsTheme.formFieldBorderColorDisabled};
  background-color: ${baseComponentsTheme.formFieldBgColorDisabled};
  color: ${baseComponentsTheme.formFieldFontColorDisabled};
  cursor: not-allowed;
`;

export default styled.button<ButtonStyledCustomProps>`
  border: 1px solid ${props => buttonBorderColor[props.btnType]};
  padding: ${props => buttonPadding[props.size]};
  background-color: ${props => buttonBackgroundColor[props.btnType]};
  color: ${props => buttonFontColor[props.btnType]};
  font-size: ${props => buttonFontSize[props.size]};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .2s;
  &:hover {
    background-color: ${props => buttonHoverBackgroundColor[props.btnType]};
  }
  &[disabled] {
    ${buttonDisabledStyle}
    &:hover,
    &:focus {
      ${buttonDisabledStyle}
    }
  }
`;
