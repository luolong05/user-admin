import styled from "styled-components";
import globalTheme from "@/styles/global/theme";

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
  sm: '4px 10px',
  md: '6px 15px',
  lg: '8px 18px'
};
const buttonFontSize: ButtonSizes = {
  sm: '12px',
  md: globalTheme.textDefaultFontSize,
  lg: '16px',
};
const buttonBorderColor: ButtonTypes = {
  default: globalTheme.colorDefault,
  primary: globalTheme.colorPrimary,
};
const buttonBackgroundColor: ButtonTypes = {
  default: 'rgba(255,255,255,0.74)',
  primary: globalTheme.colorPrimary,
};
const buttonHoverBackgroundColor: ButtonTypes = {
  default: '#fff',
  primary: '#3284e1',
};
const buttonFontColor: ButtonTypes = {
  default: globalTheme.textDefaultColor,
  primary: '#fff',
};
const buttonDisabledStyle = `
  border-color: #ddd;
  background-color: #e8e8e8;
  color: #bdbdbd;
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
