import React, {useMemo, useState} from "react";
import Button from "@commonUI/button";
import Input from "@commonUI/input";
import { RadioGroup } from "@commonUI/radio";
import Select, { SelectValueType } from "@commonUI/select";
import FormItem, { FormItemFlexDirection } from "@commonUI/formItem";
import { formItemRules } from "@/config/tsDataTypes/form";
import { UserFormWrapStyled, UserFormStyled, UserFormResultStyled, UserFormBtnWrapStyled } from "./userForm.styled";
import styleConfig from "@/config/layout";
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

const
  isMobileScreen: boolean = screen.width <= styleConfig.mobileScreenMaxWidth,
  formItemFlexDirection: FormItemFlexDirection = isMobileScreen ? 'column' : 'row',
  labelTextAlign: string = isMobileScreen ? 'left' : 'right';

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

  const handleCommit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () => {
    setShowInputResult(true);
  };

  return (
    <UserFormWrapStyled>
      <UserFormStyled>
        <FormItem
          flexDirection={formItemFlexDirection}
          labelText='Name:'
          labelTextAlign={labelTextAlign}
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
          flexDirection={formItemFlexDirection}
          labelText='Active:'
          labelTextAlign={labelTextAlign}
        >
          <RadioGroup
            name='userActive'
            value={userActive}
            options={userActiveList}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserActive(+e.target.value)}
          />
        </FormItem>
        <FormItem
          flexDirection={formItemFlexDirection}
          labelText='Skills:'
          labelTextAlign={labelTextAlign}
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
          flexDirection={formItemFlexDirection}
          labelText='Area:'
          labelTextAlign={labelTextAlign}
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
