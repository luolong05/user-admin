import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Input from "./index";


describe('Check the classname of the input by type/size/status', () => {
  const onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (evt) => {
    console.log("event.value: ", evt.target.value)
  };

  it('render input by type', () => {
    const { container } = render(<Input type='success' onChange={onInputChange} />);

    expect(container.firstChild).toHaveClass('input-success');
  });

  it('render input by size', () => {
    const { container } = render(<Input size='lg' onChange={onInputChange} />);

    expect(container.firstChild).toHaveClass('input-lg');
  });

  it('render input by status', () => {
    const { container } = render(<Input disabled onChange={onInputChange}  />);

    expect(container.firstChild).toHaveAttribute("disabled");
  });
});

describe('The input should return a correct value', () => {
  it('trigger change event', (done) => {
    let inputValue = "";
    const handleInputValueChange:  (e: React.ChangeEvent<HTMLInputElement>) => void = evt => {
      inputValue = evt.target.value;
    };
    const { container } = render(<Input value={inputValue} onChange={handleInputValueChange} />);

    fireEvent.input(container.childNodes[0], { target: { value: 'hello' }});

    expect(inputValue).toEqual('hello');

    done();
  });
});