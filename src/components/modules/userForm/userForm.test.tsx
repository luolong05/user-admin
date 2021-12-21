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
  it('before input, the commit button is disabled', () => {
    const { getByText } = render(<UserForm />);
    const commitBtn = getByText('Commit');

    expect(commitBtn).toBeDisabled();
  });

  it('after input, the commit button is enabled', () => {
    const { container, getByText } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Commit');

    if (userNameInput) {
      fireEvent.input(userNameInput, { target: { value: '12345678901234567890123' } });
    }

    expect(commitBtn).toBeEnabled();
  });

  it('The user name input value\'s max length is 20 ', () => {
    const { container } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");

    if (userNameInput) {
      fireEvent.input(userNameInput, { target: { value: '12345678901234567890123' } });
    }

    expect(userNameInput?.getAttribute("value")).toEqual('12345678901234567890');
  });

  it('after click commit button, show input result', () => {
    const { container, getByText } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Commit');

    if (userNameInput) {
      fireEvent.input(userNameInput, { target: { value: '12345678901234567890123' } });
    }

    fireEvent.click(commitBtn);
    expect(getByText('The information you entered is: 12345678901234567890')).toBeInTheDocument();
  });
});
