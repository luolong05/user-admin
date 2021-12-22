import styled from "styled-components";

export interface FormItemWrapStyledProps {
  flexDirection?: 'row' | 'column';
}

export interface FormItemLabelWrapStyledProps extends FormItemWrapStyledProps {
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
}

export const FormItemWrapStyled = styled.div<FormItemWrapStyledProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormItemLabelWrapStyled = styled.div<FormItemLabelWrapStyledProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => { const align: string = props.labelTextAlign || 'right'; return align === 'left' ? 'flex-start' : 'flex-end' }};
  flex-basis: ${props => props.labelWidth || '100px'};
  margin: ${props => props.flexDirection === 'row' ? `0 5px 0 0` : `0 0 5px 0`};
  font-size: ${props => props.labelFontSize || props.theme.textDefaultFontSize};
  color: ${props => props.labelFontColor || props.theme.textDefaultColor}
`;

export const FormItemFieldWrapStyled = styled.div`
  flex: 1;
`;