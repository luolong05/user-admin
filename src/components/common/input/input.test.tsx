import React from "react";
import {render} from "@testing-library/react";
import Input from "./index";
import userEvent from "@testing-library/user-event";

describe('Check the input status', () => {
  const onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (evt) => {
    console.log("event.value: ", evt.target.value)
  };

  it('The input should be disabled when passing the disabled attribute', () => {
    const { container } = render(<Input disabled value='' onChange={onInputChange}  />);

    expect(container.firstChild).toBeDisabled();
  });

  it('The input should be enabled when the disabled attribute is not passed to the button', () => {
    const { container } = render(<Input value='' onChange={onInputChange}  />);

    expect(container.firstChild).toBeEnabled();
  });
});

describe('The input should return a correct value', () => {
  it('trigger change event', () => {
    let inputValue = '';
    const handleInputValueChange:  (e: React.ChangeEvent<HTMLInputElement>) => void = evt => {
      inputValue = evt.target.value;
    };
    const { getByRole } = render(<Input onChange={handleInputValueChange} />);
    const input = getByRole('textbox');

    userEvent.type(input, 'hello');

    expect(inputValue).toEqual('hello');
  });
});