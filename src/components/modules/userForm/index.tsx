import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import Input from "@commonUI/input";
import Radio from "@commonUI/radio";
import RadioGroup from "@commonUI/radio/radioGroup";
import FormItem, { FormItemFlexDirection } from "@commonUI/formItem";
import { formItemRules } from "@/config/tsDataTypes/form";
import { UserFormWrapStyled, UserFormStyled, UserFormResultStyled, UserFormBtnWrapStyled } from "./userForm.styled";
import styleConfig from "@/config/layout";
import { getListLabelByValue } from "@/utils/ts";

interface UserActive {
  value: number;
  label: string;
}

interface FormRules {
  userName: formItemRules;
}

const userFormRules: FormRules = {
  userName: {
    maxLength: 20
  }
};
const userActiveList: UserActive[] = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' },
];
const
  isMobileScreen: boolean = screen.width <= styleConfig.mobileScreenMaxWidth,
  formItemFlexDirection: FormItemFlexDirection = isMobileScreen ? 'column' : 'row',
  labelWidth: string = isMobileScreen ? '100%' : '80px',
  labelTextAlign: string = isMobileScreen ? 'left' : 'right';

const UserForm: React.FC = () => {
  const [ userName, setUserName ] = useState("");
  const [ userActive, setUserActive ] = useState(1);
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
          flexDirection={formItemFlexDirection}
          filedName='userName'
          labelText='name:'
          labelWidth={labelWidth}
          labelTextAlign={labelTextAlign}
        >
          <Input
            value={userName}
            name='userName'
            maxLength={userFormRules.userName.maxLength}
            onChange={handleUserNameChange}
          />
        </FormItem>
        <FormItem
          flexDirection={formItemFlexDirection}
          filedName='userActive'
          labelText='active:'
          labelWidth={labelWidth}
          labelTextAlign={labelTextAlign}
        >
          <RadioGroup
            name='userActive'
            value={userActive}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserActive(+e.target.value)}
          >
            {
              userActiveList.map((active: UserActive) => <Radio key={active.value} value={active.value}>{active.label}</Radio>)
            }
          </RadioGroup>
        </FormItem>
        <UserFormBtnWrapStyled>
          <Button
            type='primary'
            htmlType='button'
            disabled={isBtnDisable}
            onClick={handleCommit}
          >
            Commit
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
