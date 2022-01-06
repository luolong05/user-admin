import React from "react";
import {RadioGroupWrapStyled} from "./radioGroup.styled";
import Radio, {RadioValueType} from "./radio";

export interface OptionType {
  value: RadioValueType;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value?: RadioValueType;
  options: OptionType[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({value, options, ...props}) => {
  return <RadioGroupWrapStyled>
    {
      options.map((option: OptionType) =>
        <Radio
          key={option.value}
          name={props.name}
          value={option.value}
          checked={value === option.value}
          disabled={option.disabled}
          onChange={props.onChange}
        >
          {option.label}
        </Radio>
      )
    }
  </RadioGroupWrapStyled>
};

export default RadioGroup;