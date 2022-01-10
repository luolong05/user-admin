import React, { useMemo, useState, useReducer } from 'react';
import { Button, Input, RadioGroup, Select, SelectValueType, FormItem } from '@commonUI/index';
import { FormRules, FormRuleMaxLengthType } from '@/config/tsDataTypes/form';
import {
  UserFormWrapStyled,
  UserFormStyled,
  UserFormResultStyled,
  UserFormBtnWrapStyled,
} from './userForm.styled';
import { getListLabelByValue } from '@/utils/tools';
import { userActiveList, userSkillList, userPositionList } from './testData';
import { ActionTypes, initState, reducer } from './reducer';

interface UserFormRules {
  userName: FormRules;
}

const userFormRules: UserFormRules = {
  userName: {
    maxLength: 20,
  },
};

const UserForm: React.FC = () => {
  const [formData, dispatch] = useReducer(reducer, initState);
  const [showInputResult, setShowInputResult] = useState(false);
  const [skillList, setSkillList] = useState(userSkillList);

  const isBtnDisable: boolean = useMemo(() => {
    return !formData.userName;
  }, [formData.userName]);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let newValue: string = event.target.value;
    const userNameMaxLength: FormRuleMaxLengthType = userFormRules.userName.maxLength || undefined;
    const isInputLengthOverflow: boolean =
      userNameMaxLength !== undefined ? newValue.length > userNameMaxLength : false;

    if (isInputLengthOverflow) {
      newValue = newValue.slice(0, userNameMaxLength);
    }

    dispatch({ type: ActionTypes.USER_NAME_CHANGE, payload: newValue });
  };

  const handleUserActiveChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: ActionTypes.USER_ACTIVE_CHANGE, payload: +event.target.value });
  };

  const handleUserPositionChange = (value: SelectValueType): void => {
    dispatch({ type: ActionTypes.USER_POSITION_CHANGE, payload: value });

    setSkillList(userSkillList.filter((skill) => skill.pid === value));
    dispatch({ type: ActionTypes.USER_SKILLS_CHANGE, payload: '' });
  };

  const handleUserSkillsChange = (value: SelectValueType): void => {
    dispatch({ type: ActionTypes.USER_SKILLS_CHANGE, payload: value });
  };

  const handleCommit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShowInputResult(true);
  };

  return (
    <UserFormWrapStyled>
      <UserFormStyled onSubmit={handleCommit}>
        <FormItem labelText="Name:">
          <Input
            value={formData.userName}
            name="userName"
            maxLength={userFormRules.userName.maxLength}
            placeholder="Please input"
            onChange={handleUserNameChange}
          />
        </FormItem>
        <FormItem labelText="Active:">
          <RadioGroup
            name="userActive"
            value={formData.userActive}
            options={userActiveList}
            onChange={handleUserActiveChange}
          />
        </FormItem>
        <FormItem labelText="Position:">
          <Select
            name="userPosition"
            value={formData.userPosition}
            options={userPositionList}
            onChange={handleUserPositionChange}
          />
        </FormItem>
        <FormItem labelText="Skills:">
          <Select
            name="userSkills"
            value={formData.userSkills}
            options={skillList}
            multiple={true}
            onChange={handleUserSkillsChange}
          />
        </FormItem>
        <UserFormBtnWrapStyled>
          <Button type="primary" htmlType="submit" disabled={isBtnDisable}>
            Submit
          </Button>
        </UserFormBtnWrapStyled>
      </UserFormStyled>
      {showInputResult && (
        <UserFormResultStyled>
          The information you entered is: Name: {formData.userName}, Active:
          {getListLabelByValue(userActiveList, formData.userActive)}
        </UserFormResultStyled>
      )}
    </UserFormWrapStyled>
  );
};

export default UserForm;
