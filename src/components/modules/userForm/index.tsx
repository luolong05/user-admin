import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import Input from "@commonUI/input";
import { RadioGroup } from "@commonUI/radio";
import Select, { SelectValueType } from "@commonUI/select";
import FormItem from "@commonUI/formItem";
import { formItemRules } from "@/config/tsDataTypes/form";
import { UserFormWrapStyled, UserFormStyled, UserFormResultStyled, UserFormBtnWrapStyled } from "./userForm.styled";
import {getListLabelByValue} from "@/utils/tools";
import {userActiveList, userSkillList, userAreaList} from "./testData"

interface FormRules {
  userName: formItemRules;
}

const userFormRules: FormRules = {
  userName: {
    maxLength: 20
  }
};

const UserForm: React.FC = () => {
  const [ userName, setUserName ] = useState("");
  const [ userActive, setUserActive ] = useState(1);
  const [ userSkills, setUserSkills ] = useState<SelectValueType>([]);
  const [ userArea, setUserArea ] = useState<SelectValueType>("");
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

  const handleCommit: (event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setShowInputResult(true);
  };

  return (
    <UserFormWrapStyled>
      <UserFormStyled onSubmit={handleCommit}>
        <FormItem
          labelText='Name:'
        >
          <Input
            value={userName}
            name='userName'
            maxLength={userFormRules.userName.maxLength}
            placeholder='Please input'
            onChange={handleUserNameChange}
          />
        </FormItem>
        <FormItem
          labelText='Active:'
        >
          <RadioGroup
            name='userActive'
            value={userActive}
            options={userActiveList}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserActive(+e.target.value)}
          />
        </FormItem>
        <FormItem
          labelText='Skills:'
        >
          <Select
            name='userSkills'
            value={userSkills}
            options={userSkillList}
            multiple={true}
            onChange={setUserSkills}
          />
        </FormItem>
        <FormItem
          labelText='Area:'
        >
          <Select
            name='userArea'
            value={userArea}
            options={userAreaList}
            onChange={setUserArea}
          />
        </FormItem>
        <UserFormBtnWrapStyled>
          <Button
            type='primary'
            htmlType='submit'
            disabled={isBtnDisable}
          >
            Submit
          </Button>
        </UserFormBtnWrapStyled>
      </UserFormStyled>
      {
        showInputResult &&
        <UserFormResultStyled>The information you entered is: Name: {userName}, Active: {getListLabelByValue(userActiveList, userActive)}</UserFormResultStyled>
      }
    </UserFormWrapStyled>
  );
};

export default UserForm;
