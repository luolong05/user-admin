import React from "react";
import {render, queryByAttribute} from "@testing-library/react";
import UserForm from "./index";

describe("Test the form element of the userForm component", () => {
  it('userForm must have a userName input and a commit button', () => {
    const { container, getByText } = render(<UserForm />);

    const userNameEl = queryByAttribute("name", container, "userName");
    const commitBtn = getByText('Commit');

    expect(userNameEl).toBeInTheDocument();
    expect(commitBtn).toBeInTheDocument();
  })
})