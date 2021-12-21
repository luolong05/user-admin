import styled from "styled-components";
import styleConf from "@styles/formItemForInput"

export interface formItemStyledWrapProps {
  flexDirection: 'row' | 'column';
}

export interface formItemStyledLabelProps extends formItemStyledWrapProps {
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
}

export const FormItemStyledWrap = styled.div<formItemStyledWrapProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin-bottom: ${styleConf.formItemGap};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormItemStyledLabel = styled.div<formItemStyledLabelProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => { const align: string = props.labelTextAlign || styleConf.labelTextAlign; return align === 'left' ? 'flex-start' : 'flex-end' }};
  flex-basis: ${props => props.labelWidth || styleConf.labelWidth};
  margin: ${props => props.flexDirection === 'row' ? `0 ${styleConf.labelAndFieldGap} 0 0` : `0 0 ${styleConf.labelAndFieldGap} 0`};
  font-size: ${props => props.labelFontSize || styleConf.labelFontSize};
  color: ${props => props.labelFontColor || styleConf.labelFontColor}
`;

export const FormItemStyledField = styled.div`
  flex: 1;
`;
