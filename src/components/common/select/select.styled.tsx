import styled from "styled-components";
import baseComponentsTheme from "@styles/theme";
import {InputSizes, InputTypes} from "@commonUI/input/input.styled";
import globalTheme from "@/styles/global/theme";

export interface SelectTypes {
  default: string;
  error: string;
  success: string;
}

export interface SelectSizes {
  sm: string;
  md: string;
  lg: string;
}

export interface SelectStyledCustomProps {
  type: keyof SelectTypes;
  size: keyof SelectSizes;
}

export const SelectWrapStyled = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    right: 8px;
    top: 45%;
    border-right: 1px solid ${props => props.theme.colorDefault};
    border-bottom: 1px solid ${props => props.theme.colorDefault};
    width: 6px;
    height: 6px;
    transform: translateY(-50%) rotate(45deg);
    color: ${props => props.theme.colorDefault};
  }
  input[readonly] {
    padding-right: 20px;
    cursor: pointer;
  }
`;

const SelectPadding: SelectSizes = {
  sm: baseComponentsTheme.inputPaddingSm,
  md: baseComponentsTheme.inputPaddingMd,
  lg: baseComponentsTheme.inputPaddingLg,
};

const selectFontSize: SelectSizes = {
  sm: baseComponentsTheme.fontSizeSm,
  md: baseComponentsTheme.fontSizeMd,
  lg: baseComponentsTheme.fontSizeLg,
};

const selectBorderColor: InputTypes = {
  default: globalTheme.colorDefault,
  error: globalTheme.colorError,
  success: globalTheme.colorSuccess,
};

const selectFocusBorderColor: InputTypes = {
  default: globalTheme.colorPrimary,
  error: globalTheme.colorError,
  success: globalTheme.colorSuccess,
};

export const SelectStyled = styled.div<SelectStyledCustomProps>`
  padding: ${props => SelectPadding[props.size]};
  font-size: ${props => selectFontSize[props.size]};
`

export const SelectArrowStyle = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  margin-top: -10px;
  font-size: 16px;
  color: ${props => props.theme.colorDefault};
`;

interface SelectDropdownCustomProps {
  show: boolean
}

export const SelectDropdownStyled = styled.ul<SelectDropdownCustomProps>`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  bottom: -5px;
  width: 100%;
  background-color: ${props => props.theme.backgroundDefaultColor};
`;