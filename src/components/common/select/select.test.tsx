import React from 'react';
import Select, { SelectValueType, OptionType } from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const options: OptionType[] = [
  { value: 'test1', label: 'test1-1' },
  { value: 'test2', label: 'test1-2' },
];

describe('Check if the select is rendered', () => {
  it('Render the Select, then check it if in the document', () => {
    const handleSelectValueChange = jest.fn();
    render(
      <Select
        name="testSelect"
        value=""
        options={options}
        onChange={handleSelectValueChange}
        placeholder="Please select"
      />
    );

    const select = screen.getByPlaceholderText('Please select');

    expect(select).toBeInTheDocument();
  });
});

describe('Test the functionality of the Select component', () => {
  it('Pass the multiple property with a value of false to Select, then check the change function', () => {
    let selectValue: SelectValueType = '';
    const handleSelectValueChange: (value: SelectValueType) => void = (value) => {
      selectValue = value;
    };

    render(
      <Select
        name="testSelect"
        value=""
        options={options}
        onChange={handleSelectValueChange}
        placeholder="Please select"
      />
    );

    const optionTest1 = screen.getByText('test1-1');
    userEvent.click(optionTest1);

    expect(selectValue).toEqual('test1');
  });

  it('Pass the multiple property with a value of true to Select, then check the change function', () => {
    let selectValues: SelectValueType = [];
    const handleSelectValueChange = (value: SelectValueType) => {
      selectValues = value;
    };

    render(
      <Select
        name="testSelect"
        value={selectValues}
        options={options}
        onChange={handleSelectValueChange}
        placeholder="Please select"
      />
    );

    const optionTest1 = screen.getByText('test1-1');
    const optionTest2 = screen.getByText('test1-2');
    userEvent.click(optionTest1);
    expect(selectValues).toContain('test1');

    userEvent.click(optionTest2);
    expect(selectValues).toContain('test2');
  });
});
