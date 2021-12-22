import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button from "./index";

describe('check the classname of the button by type/size/status', () => {
  it('The button should be disabled when passing the disabled attribute', () => {
    const { container } = render(<Button disabled />);

    expect(container.firstChild).toBeDisabled();
  });

  it('The button should be enabled when the disabled attribute is not passed to the button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toBeEnabled();
  });
});

describe('check the click function of the button', () => {
  it('trigger click event', (done) => {
    const handleBtnClick = jest.fn(() => {});
    const { container } = render(<Button type='primary' onClick={handleBtnClick} />);

    fireEvent.click(container.childNodes[0]);

    expect(handleBtnClick).toHaveBeenCalled();

    done();
  });
});
