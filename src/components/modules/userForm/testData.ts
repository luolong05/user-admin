import {SelectOptionType, RadioOptionType} from "@commonUI/index";

export const userPositionList: SelectOptionType[] = [
  { value: 'frontEnd', label: 'Front-end' },
  { value: 'backEnd', label: 'Back-end' },
];

export const userSkillList: SelectOptionType[] = [
  { pid: 'frontEnd', value: 'js', label: 'Javascript' },
  { pid: 'frontEnd', value: 'ts', label: 'Typescript' },
  { pid: 'frontEnd', value: 'html', label: 'Html' },
  { pid: 'frontEnd', value: 'css', label: 'Css' },
  { pid: 'frontEnd', value: 'react', label: 'React' },
  { pid: 'backEnd', value: 'java', label: 'Java' },
  { pid: 'backEnd', value: 'go', label: 'Go' },
];

export const userActiveList: RadioOptionType[] = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' },
];