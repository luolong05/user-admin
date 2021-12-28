import React from "react";
import {Select, Option} from "./index";
import {SelectValueTypes} from "./select";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Check if the select is rendered', () => {
  it('Render the Select, then check it if in the document', () => {
    const handleSelectValueChange = jest.fn();
    render(<Select name='testSelect' value='' onChange={handleSelectValueChange} placeholder='Please select'>
      <Option value='test1'>test1</Option>
    </Select>);

    const select = screen.getByPlaceholderText('Please select');

    expect(select).toBeInTheDocument();
  });
});

describe('Test the functionality of the Select component', () => {
  it('Pass the multiple property with a value of false to Select, then check the change function', () => {
    let selectValue = '';
    const handleSelectValueChange: (value: string) => void = (value) => {
      selectValue = value;
    };

    render(
      <Select name='testSelect' value='' onChange={handleSelectValueChange} placeholder='Please select'>
        <Option value='test1'>test1-1</Option>
      </Select>
    );

    const optionTest1 = screen.getByText('test1-1');
    userEvent.click(optionTest1);

    expect(selectValue).toEqual('test1');
  });

  it('Pass the multiple property with a value of true to Select, then check the change function', () => {
    type SelectValuesType = string[];
    let selectValues: SelectValuesType = [];
    const handleSelectValueChange = (value: SelectValuesType) => {
      selectValues = value;
    };

    render(<Select name='testSelect' value={selectValues} onChange={handleSelectValueChange} placeholder='Please select'>
      <Option value='test1'>test1-1</Option>
    </Select>);

    const optionTest1 = screen.getByText('test1-1');
    userEvent.click(optionTest1);

    expect(selectValues).toHaveValue('test1');
  });
});
