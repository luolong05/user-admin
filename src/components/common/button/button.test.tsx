import React from "react";
import {render} from "@testing-library/react";
import Button from "./index";
import userEvent from "@testing-library/user-event";

describe('check the button status', () => {
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
  it('trigger click event', () => {
    const handleBtnClick = jest.fn(() => {});
    const { getByText } = render(<Button type='primary' onClick={handleBtnClick}>Commit</Button>);
    const commitBtn = getByText('Commit');

    userEvent.click(commitBtn);

    expect(handleBtnClick).toHaveBeenCalled();
  });
});
