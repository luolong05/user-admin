import React from 'react';
import {
  render,
  ByRoleMatcher,
  ByRoleOptions,
  Matcher,
  SelectorMatcherOptions,
} from '@testing-library/react';
import UserForm from './index';
import userEvent from '@testing-library/user-event';

let getByRole: (role: ByRoleMatcher, options?: ByRoleOptions | undefined) => HTMLElement,
  getByText: (id: Matcher, options?: SelectorMatcherOptions | undefined) => HTMLElement;

const userNameText = 'Name:',
  userActiveLabelText = 'Active:',
  userActiveGroupText = 'Active: Yes No',
  userPositionText = 'Position:',
  userSkillsText = 'Skills:',
  submitBtnText = 'Submit';

beforeEach(() => {
  const userFormComp = render(<UserForm />);

  getByRole = userFormComp.getByRole;
  getByText = userFormComp.getByText;
});

describe('Test the form element of the userForm component', () => {
  it('userForm must have a input named userName', () => {
    const userNameLabel = getByText(userNameText);
    const userNameEl = getByRole('textbox', { name: userNameText });

    expect(userNameLabel).toBeInTheDocument();
    expect(userNameEl).toBeInTheDocument();
  });

  it('userForm must have a radio group named userActive', () => {
    const userActiveLabel = getByText(userActiveLabelText);
    const userActiveEls = getByRole('radio', { name: userActiveGroupText });

    expect(userActiveLabel).toBeInTheDocument();
    expect(userActiveEls).toBeInTheDocument();
  });

  it('userForm must have a select named userPosition', () => {
    const userPositionLabel = getByText(userPositionText);
    const userPositionEl = getByRole('textbox', { name: userPositionText });

    expect(userPositionLabel).toBeInTheDocument();
    expect(userPositionEl).toBeInTheDocument();
  });

  it('userForm must have a select named userSkills', () => {
    const userSkillsLabel = getByText(userSkillsText);
    const userSkillsEl = getByRole('textbox', { name: userSkillsText });

    expect(userSkillsLabel).toBeInTheDocument();
    expect(userSkillsEl).toBeInTheDocument();
  });

  it('userForm must have a commit button', () => {
    const commitBtn = getByRole('button', { name: submitBtnText });

    expect(commitBtn).toBeInTheDocument();
  });
});

describe('Test the form function', () => {
  it('before input, the commit button is disabled', () => {
    const commitBtn = getByRole('button', { name: submitBtnText });

    expect(commitBtn).toBeDisabled();
  });

  it('after input, the commit button is enabled', () => {
    const userNameInput = getByRole('textbox', { name: userNameText });
    const commitBtn = getByRole('button', { name: submitBtnText });

    if (userNameInput) {
      userEvent.type(userNameInput, '1');
    }

    expect(commitBtn).toBeEnabled();
  });

  it("The user name input value's max length is 20 ", () => {
    const userNameInput = getByRole('textbox', { name: userNameText });

    if (userNameInput) {
      userEvent.type(userNameInput, '12345678901234567890123');
    }

    expect(userNameInput?.getAttribute('value')).toEqual('12345678901234567890');
  });

  it('after click commit button, show input result', () => {
    const userNameEl = getByRole('textbox', { name: userNameText });
    const commitBtn = getByRole('button', { name: submitBtnText });

    if (userNameEl) {
      userEvent.type(userNameEl, '12345678901234567890123');
    }

    userEvent.click(commitBtn);
    expect(
      getByText(/The information you entered is: Name: 12345678901234567890/g)
    ).toBeInTheDocument();
  });
});
