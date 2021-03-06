import styled from 'styled-components';
import { deviceSize } from '@/config/layout/';

type flexDirection = 'row' | 'column';
export interface FormItemLabelStyledProps {
  flexDirection?: flexDirection;
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
}

export const FormItemWrapStyled = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormItemLabelStyled = styled.label<Pick<FormItemLabelStyledProps, 'flexDirection'>>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-items: ${(props) => (props.flexDirection === 'row' ? 'center' : 'stretch')};
  width: 100%;
  @media (max-width: ${deviceSize.pad}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FormItemLabelTextStyled = styled.span<FormItemLabelStyledProps>`
  flex-basis: ${(props) => {
    if (props.flexDirection === 'row') {
      return props.labelWidth || '100px';
    }

    return '100%';
  }};
  margin: ${(props) => (props.flexDirection === 'row' ? `0 8px 0 0` : `0 0 8px 0`)};
  text-align: ${(props) => props.labelTextAlign || 'right'};
  font-size: ${(props) => props.labelFontSize || props.theme.textDefaultFontSize};
  color: ${(props) => props.labelFontColor || props.theme.textDefaultColor};
  cursor: pointer;
  @media (max-width: ${deviceSize.pad}) {
    flex-basis: 100%;
    margin: 0 0 8px 0;
    text-align: left;
    align-items: stretch;
  }
`;

export const FormItemFieldWrapStyled = styled.div`
  flex: 1;
`;
