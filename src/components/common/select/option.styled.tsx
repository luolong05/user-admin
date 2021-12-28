import styled from "styled-components";

interface OptionStyledProps {
  disabled?: boolean
}

export const OptionStyled = styled.li<OptionStyledProps>`
  padding: ${props => props.theme.selectOptionPadding};
  background-color: ${props => props.disabled ? props.theme.formFieldBgColorDisabled : props.theme.selectOptionBgColor};
  font-size: ${props => props.theme.textDefaultFontSize};
  color: ${props => props.disabled ? props.theme.formFieldFontColorDisabled : props.theme.textDefaultColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.disabled ? props.theme.formFieldBgColorDisabled : props.theme.colorPrimaryActive};
    color: ${props => props.disabled ? props.theme.formFieldFontColorDisabled : props.theme.bgPrimaryActiveFontColor};
  }
`