import React from "react";
import {render, queryByAttribute, fireEvent} from "@testing-library/react";
import FormItemForInput from "./index";

describe("check label and input element is in the document", () => {
  it('check label and input element is in the document', () => {
    const handleInputValueChange: (e:React.ChangeEvent<HTMLInputElement>) => void = () => {};
    const { container, getByLabelText } = render(
      <FormItemForInput
        labelText='test label'
        value='test input'
        name='inputName'
        onChange={handleInputValueChange}
      />
    );

    expect(getByLabelText('test label')).toBeInTheDocument();
    expect(queryByAttribute('id', container, 'inputName')).toBeInTheDocument();
  });
});

describe("check if the change function works", () => {
  it('trigger the change function', (done) => {
    let inputValue = "";
    const handleInputValueChange:  (e: React.ChangeEvent<HTMLInputElement>) => void = evt => {
      inputValue = evt.target.value;
    };
    const { getByDisplayValue } = render(
      <FormItemForInput
        labelText='text label'
        value='test input'
        name='inputName'
        onChange={handleInputValueChange} />
    );

    fireEvent.input(getByDisplayValue('test input'), { target: { value: 'test input new value' }});

    expect(inputValue).toEqual('test input new value');

    done();
  });
});
