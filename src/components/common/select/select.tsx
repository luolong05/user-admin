import React, {useState} from "react";
import Input from "@commonUI/input";
import {InputSizes, InputTypes} from "@commonUI/input/input.styled";
import {SelectWrapStyled, SelectDropdownStyled} from "./select.styled";
import {OptionValueTypes} from "./option";

export type SelectValueTypes = OptionValueTypes;
interface SelectProps<T> {
  name: string;
  value: T;
  size?: keyof InputSizes;
  type?: keyof InputTypes;
  multiple?: boolean;
  onChange: (value: T) => void;
  [propName: string]: any;
}

const Select: <T extends OptionValueTypes=OptionValueTypes>(props: SelectProps<T>) => JSX.Element = ({value, onChange, children, ...props}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSingleSelectChange: (optionValue: OptionValueTypes) => void = optionValue => {
    setShowDropdown(false);

    // onChange(optionValue);

    const isSameValue: boolean = value === optionValue;
    if (!isSameValue) {
      onChange(optionValue);
    }
  };

  const handleMultipleSelectChange: (optionValue: OptionValueTypes) => void = optionValue => {
    let newValues;
    if (!Array.isArray(value)) {
      newValues = [ value ];
    } else {
      newValues = [ ...value ];
    }

    const index: number = newValues.indexOf(optionValue);
    if (index === -1) {
      newValues.push(optionValue);
    } else {
      newValues.splice(index, 1);
    }

    onChange(newValues);
  };

  const handleOptionClick: (optionValue: OptionValueTypes) => void = (optionValue) => {
    if (props.multiple) {
      handleMultipleSelectChange(optionValue);
    } else {
      handleSingleSelectChange(optionValue);
    }
  };

  return <SelectWrapStyled>
    <Input readOnly size={props.size} type={props.type} onClick={() => setShowDropdown(!showDropdown)}></Input>
    <SelectDropdownStyled show={showDropdown}>
      {
        React.Children.map(children, (child: React.ReactNode) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          return React.cloneElement(child, {
            ...child.props,
            selected: value === child.props.value,
            onClick: () => { handleOptionClick(child.props.value) },
          });
        })
      }
    </SelectDropdownStyled>
  </SelectWrapStyled>
}

export default Select;