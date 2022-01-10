import React from 'react';
import {
  FormItemWrapStyled,
  FormItemLabelStyled,
  FormItemLabelTextStyled,
  FormItemFieldWrapStyled,
  FormItemLabelStyledProps,
} from './formItem.styled';

export type FormItemFlexDirection = 'row' | 'column';
export interface FormItemProps {
  flexDirection?: FormItemFlexDirection;
  labelText?: string;
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
}

const FormItem: React.FC<FormItemProps> = ({ children, ...props }) => {
  const formItemLabelProps: FormItemLabelStyledProps = {
    flexDirection: props.flexDirection || 'row',
    labelWidth: props.labelWidth,
    labelTextAlign: props.labelTextAlign,
    labelFontSize: props.labelFontSize,
    labelFontColor: props.labelFontColor,
  };

  return (
    <FormItemWrapStyled>
      <FormItemLabelStyled flexDirection={formItemLabelProps.flexDirection}>
        <FormItemLabelTextStyled {...formItemLabelProps}>{props.labelText}</FormItemLabelTextStyled>
        <FormItemFieldWrapStyled>{children}</FormItemFieldWrapStyled>
      </FormItemLabelStyled>
    </FormItemWrapStyled>
  );
};

export default FormItem;
