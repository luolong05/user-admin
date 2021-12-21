import React from "react";
import { FormItemWrapStyled, FormItemLabelWrapStyled, FormItemFieldWrapStyled, formItemWrapStyledProps, formItemLabelWrapStyledProps } from './formItem.styled';

export interface formItemProps {
  flexDirection?: 'row' | 'column';
  labelText?: string;
  labelWidth?: string;
  labelTextAlign?: string;
  labelFontSize?: string;
  labelFontColor?: string;
  filedName: string;
}


const FormItem: React.FC<formItemProps> = ({children, ...props}) => {
  const formItemProps: formItemWrapStyledProps = {
    flexDirection: props.flexDirection || 'row',
  };
  const formItemLabelProps: formItemLabelWrapStyledProps = {
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
