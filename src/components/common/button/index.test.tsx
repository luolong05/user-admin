import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button from "./index";

describe('check the classname of the button by type/size/status', () => {
  it('render button by type', () => {
    const { container } = render(<Button type='primary' />);

    expect(container.firstChild).toHaveClass('btn-primary');
  });

  it('render button by size', () => {
    const { container } = render(<Button size='lg' />);

    expect(container.firstChild).toHaveClass('btn-lg');
  });

  it('render button by status', () => {
    const { container } = render(<Button disabled />);

    expect(container.firstChild).toHaveAttribute("disabled");
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
