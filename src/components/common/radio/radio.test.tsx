import React from "react";
import {Radio} from './index';
import {render} from "@testing-library/react";

describe('Check the radio dom information', () => {
  it('The radio should rendered in the document', () => {
    const { getByRole, getByLabelText } = render(<Radio>test</Radio>);
    const radio = getByRole('radio');
    const label = getByLabelText('test');

    expect(radio).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('The radio should be disabled when passing a disabled property', () => {
    const { getByRole } = render(<Radio disabled />);
    const radio = getByRole('radio');

    expect(radio).toBeDisabled();
  });
});