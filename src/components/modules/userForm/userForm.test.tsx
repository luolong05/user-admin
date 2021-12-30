import React from "react";
import {render, queryByAttribute} from "@testing-library/react";
import UserForm from "./index";
import userEvent from "@testing-library/user-event";

describe("Test the form element of the userForm component", () => {
  it('userForm must have a userName input', () => {
    const { container } = render(<UserForm />);
    const userNameEl = queryByAttribute("name", container, "userName");

    expect(userNameEl).toBeInTheDocument();
  });

  it('userForm must have a commit button', () => {
    const { getByText } = render(<UserForm />);
    const commitBtn = getByText('Submit');

    expect(commitBtn).toBeInTheDocument();
  });
});

describe("Test the form function", () => {
  it('before input, the commit button is disabled', () => {
    const { getByText } = render(<UserForm />);
    const commitBtn = getByText('Submit');

    expect(commitBtn).toBeDisabled();
  });

  it('after input, the commit button is enabled', () => {
    const { container, getByText } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Submit');

    if (userNameInput) {
      userEvent.type(userNameInput, '12345678901234567890123')
    }

    expect(commitBtn).toBeEnabled();
  });

  it('The user name input value\'s max length is 20 ', () => {
    const { container } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");

    if (userNameInput) {
      userEvent.type(userNameInput, '12345678901234567890123')
    }

    expect(userNameInput?.getAttribute("value")).toEqual('12345678901234567890');
  });

  it('after click commit button, show input result', () => {
    const { container, getByText } = render(<UserForm />);
    const userNameInput = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Submit');

    if (userNameInput) {
      userEvent.type(userNameInput, '12345678901234567890123')
    }

    userEvent.click(commitBtn);
    expect(getByText(/The information you entered is: Name: 12345678901234567890/g)).toBeInTheDocument();
  });
});
