import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import FormItemForInput from "@commonUI/formItemForInput";
import { formItemRules } from "@/config/tsDataTypes/form"

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
  const isBtnDisable: boolean = useMemo(() => {
    return !userName;
  },[ userName ]);

  const handleUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (evt) => {
    let newValue: string = evt.target.value;
    const isInputLengthOverflow: boolean =
      userFormRules.userName.maxLength
        ? newValue.length > userFormRules.userName.maxLength
        : false;
    if (isInputLengthOverflow) {
      newValue = newValue.slice(0, userFormRules.userName.maxLength);
    }

    setUserName(newValue);
  };

  const handleBtnClick = () => {
    console.log("btn click enter.");
  };

  return (
    <>
      <FormItemForInput
        value={userName}
        name='userName'
        maxLength={userFormRules.userName.maxLength}
        labelText='user name:'
        onChange={handleUserNameChange}
      />
      <Button type='primary' onClick={handleBtnClick} disabled={isBtnDisable}>
        Commit
      </Button>
    </>
  );
};

export default UserForm;
