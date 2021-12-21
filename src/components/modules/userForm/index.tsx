import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import Input from "@commonUI/input";
import FormItem from "@commonUI/formItem";
import { formItemRules } from "@/config/tsDataTypes/form";
import { UserFormWrapStyled, UserFormStyled, UserFormResultStyled } from "./userForm.styled"

interface formRules {
  userName: formItemRules;
}

const userFormRules: formRules = {
  userName: {
    maxLength: 20
  }
};

const UserForm: React.FC = () => {
  const [ userName, setUserName ] = useState("");
  const [ showInputResult, setShowInputResult ] = useState(false);
  const isBtnDisable: boolean = useMemo(() => {
    return !userName;
  },[ userName ]);

  const handleUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (evt) => {
    let newValue: string = evt.target.value;
    const userNameMaxLength: number | undefined = userFormRules.userName.maxLength || undefined;
    const isInputLengthOverflow: boolean =
      userNameMaxLength !== undefined
        ? newValue.length > userNameMaxLength
        : false;
    if (isInputLengthOverflow) {
      newValue = newValue.slice(0, userNameMaxLength);
    }

    setUserName(newValue);
    setShowInputResult(false);
  };

  const handleCommit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () => {
    setShowInputResult(true);
  };

  return (
    <UserFormWrapStyled>
      <UserFormStyled>
        <FormItem
          filedName='userName'
          labelText='user name:'
          labelWidth='80px'
        >
          <Input
            value={userName}
            name='userName'
            maxLength={userFormRules.userName.maxLength}
            onChange={handleUserNameChange}
          />
        </FormItem>
        <FormItem
          filedName='userFormCommitButton'
          labelWidth='80px'
        >
          <Button
            type='primary'
            htmlType='button'
            disabled={isBtnDisable}
            onClick={handleCommit}
          >
            Commit
          </Button>
        </FormItem>
      </UserFormStyled>
      {
        showInputResult &&
        <UserFormResultStyled>The information you entered is: {userName}</UserFormResultStyled>
      }
    </UserFormWrapStyled>
  );
};

export default UserForm;
