import React from 'react';
import { render } from '@testing-library/react';
import UserForm from './index';
import userEvent from '@testing-library/user-event';

describe('Test the form element of the userForm component', () => {
  it('userForm must have a input named userName', () => {
    const { getByRole, getByText } = render(<UserForm />);
    const nameText = 'Name:';
    const userNameLabel = getByText(nameText);
    const userNameEl = getByRole('textbox', { name: nameText });

    expect(userNameLabel).toBeInTheDocument();
    expect(userNameEl).toBeInTheDocument();
  });

  it('userForm must have a radio group named userActive', () => {
    const { getByRole, getByText } = render(<UserForm />);
    const activeText = 'Active:';
    const userActiveLabel = getByText(activeText);
    const userActiveEls = getByRole('radio', { name: 'Active: Yes No' });

    expect(userActiveLabel).toBeInTheDocument();
    expect(userActiveEls).toBeInTheDocument();
  });

  it('userForm must have a select named userPosition', () => {
    const { getByRole, getByText } = render(<UserForm />);
    const positionText = 'Position:';
    const userPositionLabel = getByText(positionText);
    const userPositionEl = getByRole('textbox', { name: positionText });

    expect(userPositionLabel).toBeInTheDocument();
    expect(userPositionEl).toBeInTheDocument();
  });

  it('userForm must have a select named userSkills', () => {
    const { getByRole, getByText } = render(<UserForm />);
    const skillsText = 'Skills:';
    const userSkillsLabel = getByText(skillsText);
    const userSkillsEl = getByRole('textbox', { name: skillsText });

    expect(userSkillsLabel).toBeInTheDocument();
    expect(userSkillsEl).toBeInTheDocument();
  });

  it('userForm must have a commit button', () => {
    const { getByRole } = render(<UserForm />);
    const commitBtn = getByRole('button', { name: 'Submit' });

    expect(commitBtn).toBeInTheDocument();
  });
});

describe('Test the form function', () => {
  it('before input, the commit button is disabled', () => {
    const { getByRole } = render(<UserForm />);
    const commitBtn = getByRole('button', { name: 'Submit' });

    expect(commitBtn).toBeDisabled();
  });

  it('after input, the commit button is enabled', () => {
    const { getByRole } = render(<UserForm />);
    const userNameInput = getByRole('textbox', { name: 'Name:' });
    const commitBtn = getByRole('button', { name: 'Submit' });

    if (userNameInput) {
      userEvent.type(userNameInput, '1');
    }

    expect(commitBtn).toBeEnabled();
  });

  it("The user name input value's max length is 20 ", () => {
    const { getByRole } = render(<UserForm />);
    const userNameInput = getByRole('textbox', { name: 'Name:' });

    if (userNameInput) {
      userEvent.type(userNameInput, '12345678901234567890123');
    }

    expect(userNameInput?.getAttribute('value')).toEqual('12345678901234567890');
  });

  it('after click commit button, show input result', () => {
    const { getByRole, getByText } = render(<UserForm />);
    const userNameEl = getByRole('textbox', { name: 'Name:' });
    const commitBtn = getByRole('button', { name: 'Submit' });

    if (userNameEl) {
      userEvent.type(userNameEl, '12345678901234567890123');
    }

    userEvent.click(commitBtn);
    expect(
      getByText(/The information you entered is: Name: 12345678901234567890/g)
    ).toBeInTheDocument();
  });
});
