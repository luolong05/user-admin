import React from "react";
import Option from "./option";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('check the option dom', () => {
  it('Option should render in the document', () => {
    const { getByText } = render(<Option value="aa">aa</Option>);
    const option = getByText('aa');

    expect(option).toBeInTheDocument();
  });
});

describe('check the click function of the option ', () => {
  it('Option should respond to the click event ', () => {
    const handleClick = jest.fn(() => {});
    const { getByText } = render(<Option value="aa" onClick={handleClick}>aa</Option>);
    const option= getByText('aa');

    userEvent.click(option);

    expect(handleClick).toHaveBeenCalled();
  });

  it('Pass the disable property with a value of true to option, Option should not respond the click event ', () => {
    const handleClick = jest.fn(() => {});
    const { getByText } = render(<Option value="aa" disabled={true} onClick={handleClick}>aa</Option>);
    const option= getByText('aa');

    userEvent.click(option);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
