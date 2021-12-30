import React, {useEffect, useMemo, useRef, useState} from "react";
import Input from "@commonUI/input";
import {InputSizes, InputTypes} from "@commonUI/input/input.styled";
import {SelectWrapStyled, SelectDropdownStyled, OptionStyled} from "./select.styled";
import {ThemeProvider} from "styled-components";
import baseComponentsTheme from "@/styles/baseComponents/theme";
import {on, off} from "@/utils/dom";

export type OptionValueType = string | number;
export type SelectValueType = OptionValueType | OptionValueType[];

export interface OptionType {
  value: OptionValueType;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  name: string;
  value: SelectValueType;
  options: OptionType[];
  size?: keyof InputSizes;
  type?: keyof InputTypes;
  multiple?: boolean;
  onChange: (value: SelectValueType) => void;
  [propName: string]: any;
}

interface OptionTypeWithSelect extends OptionType {
  selected: boolean;
}

const Index: React.FC<SelectProps> = ({value: selectValue, multiple, onChange, ...props}) => {
  const isOptionSelected: (value: OptionValueType) => boolean = value => {
    if (!multiple) {
      return value === selectValue;
    }

    return multipleSelectValue.includes(value);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const multipleSelectValue = useMemo(() => {
    if (!multiple) {
      return [];
    }

    if (Array.isArray(selectValue)) {
      return selectValue;
    }

    return selectValue !== '' ?  [ selectValue ] : [];
  }, [ selectValue, multiple ]);

  const selectOptions: OptionTypeWithSelect[] = useMemo(() =>
    props.options.map((option: OptionType) => ({
      ...option,
      selected: isOptionSelected(option.value)
    })), [ props.options, selectValue]);

  const selectedOptions = useMemo(() => {
    const options = props.options;
    if (selectValue === '') {
      return [];
    }

    if (!multiple) {
      const selectedOption = selectOptions.find(option => option.value === selectValue);
      return selectedOption ? [selectedOption] : [];
    }

    return multipleSelectValue.map(value => {
      return options.find(option => option.value === value);
    });
  }, [ props.options, selectValue, multiple ]);

  const handleSingleSelectChange: (option: OptionType) => void = option => {
    setShowDropdown(false);

    const optionValue: OptionValueType = option.value;
    const isSameValue: boolean = selectValue === optionValue;
    if (!isSameValue) {
      onChange(optionValue);
    }
  };

  const handleMultipleSelectChange: (option: OptionType) => void = option => {
    const newValues: OptionValueType[] = [...multipleSelectValue];
    const optionValue: OptionValueType = option.value;
    const index: number = newValues.indexOf(optionValue);
    if (index === -1) {
      newValues.push(optionValue);
    } else {
      newValues.splice(index, 1);
    }

    onChange(newValues);
  };

  const handleOptionClick: (option: OptionType) => void = option => {
    if (multiple) {
      handleMultipleSelectChange(option);
    } else {
      handleSingleSelectChange(option);
    }
  };

  const selectWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDropdown) {
      return;
    }

    const handleClickOutside: EventListenerOrEventListenerObject = (event) => {
      const selectWrapDom = selectWrapRef.current;
      if (!selectWrapDom) { return; }

      const target = event.target;
      if (!(target instanceof HTMLElement)) { return; }

      if (selectWrapDom.contains(target)) { return; }

      setShowDropdown(false);
    };

    on(document.body, 'click', handleClickOutside);
    return () => {
      off(document.body, 'click', handleClickOutside);
    }
  }, [ showDropdown ]);

  return <ThemeProvider theme={baseComponentsTheme}>
    <SelectWrapStyled ref={selectWrapRef} onClick={(e) => { e.preventDefault(); }}>
      <Input
        readOnly
        size={props.size}
        type={props.type}
        placeholder={props.placeholder || 'Please select'}
        value={selectedOptions.map(option => option?.label).join(', ')}
        onClick={() => setShowDropdown(!showDropdown)}
      />
      <SelectDropdownStyled show={showDropdown} size={props.size || 'md'}>
        {
          selectOptions.map((option: OptionTypeWithSelect) =>
            <OptionStyled
              key={option.value}
              selected={option.selected}
              onClick={() => {handleOptionClick(option)}}
            >
              {option.label}
            </OptionStyled>)
        }
      </SelectDropdownStyled>
    </SelectWrapStyled>
  </ThemeProvider>
}

export default Index;