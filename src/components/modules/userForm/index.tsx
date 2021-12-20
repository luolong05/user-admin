import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import Input from "@commonUI/input";
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
      <Input value={userName} maxLength={userFormRules.userName.maxLength} onChange={handleUserNameChange} />
      <Button onClick={handleBtnClick} disabled={isBtnDisable}>
        button
      </Button>
    </>
  );
};

export default UserForm;
