import styled from "styled-components";

export const RadioLabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: ${props => props.theme.inputRadioGap};
  &:last-child {
    margin-right: 0;
  }
`;

export const RadioTextStyled = styled.span<{ disabled?: boolean }>`
  padding-left: ${props => props.theme.inputRadioTextGap};
  font-size: ${props => props.theme.textDefaultFontSize};
  color: ${props => props.disabled ?  props.theme.formFieldFontColorDisabled : props.theme.textDefaultColor};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const RadioStyled = styled.input.attrs(() => ({
  type: "radio"
}))`
  cursor: pointer;
  &[disabled] {
    border-color: ${props => props.theme.formFieldBorderColorDisabled};
    background-color: ${props => props.theme.formFieldBgColorDisabled};
    color: ${props => props.theme.formFieldFontColorDisabled};
    cursor: not-allowed;
  }
`;