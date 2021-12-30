import styled from "styled-components";
import {InputSizes, InputTypes} from "@commonUI/input/input.styled";
import baseComponentsTheme from "@styles/theme";

export interface SelectStyledCustomProps {
  type: keyof InputTypes;
  size: keyof InputSizes;
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

interface SelectDropdownCustomProps {
  show: boolean,
  size: keyof InputSizes;
}

const selectDropdownOffsetTop: InputSizes = {
  sm: baseComponentsTheme.selectDropdownOffsetTopSm,
  md: baseComponentsTheme.selectDropdownOffsetTopMd,
  lg: baseComponentsTheme.selectDropdownOffsetTopLg,
};

export const SelectDropdownStyled = styled.ul<SelectDropdownCustomProps>`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: ${props => selectDropdownOffsetTop[props.size]};
  width: 100%;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: ${props => props.theme.backgroundDefaultColor};
  z-index: 999;
`;

interface OptionStyledProps {
  selected: boolean;
  disabled?: boolean;
}

export const OptionStyled = styled.li<OptionStyledProps>`
  margin: ${props => props.theme.selectOptionMargin};
  padding: ${props => props.theme.selectOptionPadding};
  background-color: ${props => {
    if (props.disabled) {
      return props.theme.formFieldBgColorDisabled;
    }
    
    if (props.selected) {
      return props.theme.selectOptionActiveBgColor;
    }
    
    return props.theme.selectOptionBgColor;
  }};
  font-size: ${props => props.theme.textDefaultFontSize};
  color: ${props => {
    if (props.disabled) {
      return props.theme.formFieldFontColorDisabled;
    }
    
    if (props.selected) {
      return props.theme.bgPrimaryActiveFontColor;
    }
    
    return props.theme.textDefaultColor;
  }};
  cursor: pointer;
  border-radius: ${props => props.theme.formFieldBorderRadius};
  &:hover {
    background-color: ${props => {
      if (props.disabled) {
        return props.theme.formFieldBgColorDisabled;
      }

      if (props.selected) {
        return props.theme.selectOptionActiveBgColor;
      }

      return props.theme.backgroundDefaultColorActive;
    }};
  }
`