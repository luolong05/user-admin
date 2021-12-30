import React from "react";
import {render} from "@testing-library/react";
import FormItem from "./index";
import Input from "@commonUI/input";

describe('Check if the label is rendered', () => {
  it('render formItem', () => {
    const onInputValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void = () => {};
    const { getByLabelText } = render(
      <FormItem
        labelText='testLabel'
      >
        <Input name='testFormItemName' value='' onChange={onInputValueChange} />
      </FormItem>
    );

    expect(getByLabelText('testLabel')).toBeInTheDocument();
  });
});