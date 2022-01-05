import {SelectValueType} from "@commonUI/index";

export enum ActionTypes {
  USER_NAME_CHANGE = 'USER_NAME_CHANGE',
  USER_ACTIVE_CHANGE = 'USER_ACTIVE_CHANGE',
  USER_SKILLS_CHANGE = 'USER_SKILLS_CHANGE',
  USER_AREA_CHANGE = 'USER_AREA_CHANGE',
}

type UserNameType = string;
type UserActiveType = number;
type UserSkillsType = SelectValueType;
type UserAreaType = SelectValueType;

export interface FormData {
  userName: UserNameType;
  userActive: UserActiveType;
  userSkills: UserSkillsType;
  userArea: UserAreaType;
}

export type Actions = 
  { type: 'USER_NAME_CHANGE'; payload: UserNameType; } |
  { type: 'USER_ACTIVE_CHANGE'; payload: UserActiveType; } |
  { type: 'USER_SKILLS_CHANGE'; payload: UserSkillsType; } |
  { type: 'USER_AREA_CHANGE'; payload: UserAreaType; }

export const initState:FormData = {
  userName: '',
  userActive: 1,
  userSkills: [],
  userArea: '',
}

export const reducer = (state: FormData, action: Actions): FormData => {
  switch (action.type) {
    case ActionTypes.USER_NAME_CHANGE: 
      return { ...state, userName: action.payload };
    case ActionTypes.USER_ACTIVE_CHANGE: 
      return { ...state, userActive: action.payload };
    case ActionTypes.USER_SKILLS_CHANGE: 
      return { ...state, userSkills: action.payload };
    case ActionTypes.USER_AREA_CHANGE: 
      return { ...state, userArea: action.payload };
    default:
      return state;
  }
}