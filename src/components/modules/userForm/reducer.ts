import {SelectValueType} from "@commonUI/index";

export enum ActionTypes {
  USER_NAME_CHANGE = 'USER_NAME_CHANGE',
  USER_ACTIVE_CHANGE = 'USER_ACTIVE_CHANGE',
  USER_POSITION_CHANGE = 'USER_POSITION_CHANGE',
  USER_SKILLS_CHANGE = 'USER_SKILLS_CHANGE',
}
export interface FormData {
  userName: string;
  userActive: number;
  userPosition: SelectValueType;
  userSkills: SelectValueType;
}

export type Actions = { 
  type: ActionTypes; 
  payload: string | number | SelectValueType;
}

export const initState: FormData = {
  userName: '',
  userActive: 1,
  userPosition: '',
  userSkills: [],
}

export const reducer = (state: FormData, action: Actions): FormData => {
  switch (action.type) {
    case ActionTypes.USER_NAME_CHANGE: 
      return { ...state, userName: action.payload as string };
    case ActionTypes.USER_ACTIVE_CHANGE: 
      return { ...state, userActive: action.payload as number };
    case ActionTypes.USER_POSITION_CHANGE: 
      return { ...state, userPosition: action.payload };
    case ActionTypes.USER_SKILLS_CHANGE: 
      return { ...state, userSkills: action.payload };
    default:
      return state;
  }
}