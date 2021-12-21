import React from "react";
import {render, queryByAttribute, fireEvent, screen} from "@testing-library/react";
import UserForm from "./index";

describe("Test the form element of the userForm component", () => {
  it('userForm must have a userName input', () => {
    const { container } = render(<UserForm />);
    const userNameEl = queryByAttribute("name", container, "userName");

    expect(userNameEl).toBeInTheDocument();
  });

  it('userForm must have a commit button', () => {
    const { getByText } = render(<UserForm />);
    const commitBtn = getByText('Commit');

    expect(commitBtn).toBeInTheDocument();
  });
});

describe("Test the form function", () => {
  it('userForm must have a correct userName value', () => {
    const { container } = render(<UserForm />);
    const userNameEl = queryByAttribute("name", container, "userName");

    expect(userNameEl).toBeInTheDocument();
  });

  it('userForm must have a commit button', () => {
    const { container, getByText } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Commit');

    expect(commitBtn).toBeDisabled();

    if (userNameInput) {
      fireEvent.input(userNameInput, { target: { value: '12345678901234567890123' } });
    }

    expect(commitBtn).toBeEnabled();
    expect(userNameInput?.getAttribute("value")).toEqual('12345678901234567890');

    fireEvent.click(commitBtn);

    expect(screen.getByText('The information you entered is: 12345678901234567890')).toBeInTheDocument();
  });
});
