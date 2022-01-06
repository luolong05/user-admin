import {SelectValueType} from "@commonUI/index";

export enum ActionTypes {
  USER_NAME_CHANGE = 'USER_NAME_CHANGE',
  USER_ACTIVE_CHANGE = 'USER_ACTIVE_CHANGE',
  USER_POSITION_CHANGE = 'USER_PROVINCE_CHANGE',
  USER_SKILLS_CHANGE = 'USER_SKILLS_CHANGE',
}

type UserNameType = string;
type UserActiveType = number;
type UserPositionType = SelectValueType;
type UserSkillsType = SelectValueType;

export interface FormData {
  userName: UserNameType;
  userActive: UserActiveType;
  userPosition: UserPositionType;
  userSkills: UserSkillsType;
}

export type Actions = 
  { type: 'USER_NAME_CHANGE'; payload: UserNameType; } |
  { type: 'USER_ACTIVE_CHANGE'; payload: UserActiveType; } |
  { type: 'USER_SKILLS_CHANGE'; payload: UserSkillsType; } |
  { type: 'USER_PROVINCE_CHANGE'; payload: UserPositionType; } 

export const initState: FormData = {
  userName: '',
  userActive: 1,
  userPosition: '',
  userSkills: [],
}

export const reducer = (state: FormData, action: Actions): FormData => {
  switch (action.type) {
    case ActionTypes.USER_NAME_CHANGE: 
      return { ...state, userName: action.payload };
    case ActionTypes.USER_ACTIVE_CHANGE: 
      return { ...state, userActive: action.payload };
    case ActionTypes.USER_POSITION_CHANGE: 
      return { ...state, userPosition: action.payload };
    case ActionTypes.USER_SKILLS_CHANGE: 
      return { ...state, userSkills: action.payload };
    default:
      return state;
  }
}