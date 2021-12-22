import React from "react";
import { FormItemWrapStyled, FormItemLabelWrapStyled, FormItemFieldWrapStyled, FormItemWrapStyledProps, FormItemLabelWrapStyledProps } from './formItem.styled';

export interface FormItemProps {
  flexDirection?: 'row' | 'column';
  labelText?: string;
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
  filedName: string;
}


const FormItem: React.FC<FormItemProps> = ({children, ...props}) => {
  const formItemProps: FormItemWrapStyledProps = {
    flexDirection: props.flexDirection || 'row',
  };
  const formItemLabelProps: FormItemLabelWrapStyledProps = {
    flexDirection: props.flexDirection || 'row',
    labelWidth: props.labelWidth,
    labelTextAlign: props.labelTextAlign,
    labelFontSize: props.labelFontSize,
    labelFontColor: props.labelFontColor,
  };

  return <FormItemWrapStyled {...formItemProps}>
    <FormItemLabelWrapStyled {...formItemLabelProps}>
      <label htmlFor={props.filedName}>{props.labelText}</label>
    </FormItemLabelWrapStyled>
    <FormItemFieldWrapStyled>{children}</FormItemFieldWrapStyled>
  </FormItemWrapStyled>
}

export default FormItem;
