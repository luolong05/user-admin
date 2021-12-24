import React from "react";
import {RadioGroupWrapStyled} from "./radioGroup.styled";
import { RadioValue } from "./index";

interface RadioGroupProps {
  name: string;
  value?: RadioValue;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({value, children, ...props}) => {
  return <RadioGroupWrapStyled>
    {
      React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          ...child.props,
          name: props.name,
          checked: value === child.props.value,
          onChange: props.onChange,
        });
      })
    }
  </RadioGroupWrapStyled>
};

export default RadioGroup;