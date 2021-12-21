import React from "react";
import Input, { inputProps } from "@commonUI/input";
import { FormItemStyledWrap, FormItemStyledLabel, FormItemStyledField, formItemStyledLabelProps } from "./formItemForInput.styles"

interface formItemForInputProps extends inputProps {
  labelText: string;
  labelWidth?: string;
  labelFontSize?: string;
  labelFontColor?: string;
  labelTextAlign?: string;
  inputClassName?: string;
  flexDirection?: 'row' | 'column';
}

const FormItemForInput: React.FC<formItemForInputProps> = (props) => {
  const
    formItemStyledLabelProps: formItemStyledLabelProps = {
      flexDirection: props.flexDirection || 'row',
      labelWidth: props.labelWidth,
      labelTextAlign: props.labelTextAlign,
      labelFontSize: props.labelFontSize,
      labelFontColor: props.labelFontColor,
    },
    inputProps: inputProps = {
      value: props.value,
      name: props.name,
      htmlType: props.htmlType,
      type: props.type,
      size: props.size,
      disabled: props.disabled,
      className: props.inputClassName,
      maxLength: props.maxLength,
      onChange: props.onChange
    };

  return <FormItemStyledWrap flexDirection={formItemStyledLabelProps.flexDirection} >
    <FormItemStyledLabel {...formItemStyledLabelProps}>
      <label htmlFor={props.name}>{props.labelText}</label>
    </FormItemStyledLabel>
    <FormItemStyledField>
      <Input {...inputProps} />
    </FormItemStyledField>
  </FormItemStyledWrap>;
}

export default FormItemForInput;
