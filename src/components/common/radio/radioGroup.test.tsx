import React from "react";
import {Radio, RadioGroup} from "./index";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Radio group should render radios in the document', () => {
  it('pass tow radios to the radio group component, check if these radios are in the document', () => {
    const handleRadioValueChange = jest.fn(() => {});
    const { getByDisplayValue } = render(<RadioGroup name='radioGroupTest' onChange={handleRadioValueChange}>
      <Radio value='test1'>test1</Radio>
      <Radio value='test2'>test2</Radio>
    </RadioGroup>);

    expect(getByDisplayValue('test1')).toBeInTheDocument();
    expect(getByDisplayValue('test2')).toBeInTheDocument();
  });
});

describe('Radio group should return a correct value when checked changed', () => {
  it('Check the change event', () => {
    let checkedValue = '';
    const handleRadioValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
      checkedValue = e.target.value;
    };
    const { getByDisplayValue } = render(<RadioGroup name='radioGroupTest' onChange={handleRadioValueChange}>
      <Radio value='test1'>test1</Radio>
      <Radio value='test2'>test2</Radio>
    </RadioGroup>);

    const radio2 = getByDisplayValue('test2');

    userEvent.click(radio2);
    expect(checkedValue).toEqual('test2')
  });
});
