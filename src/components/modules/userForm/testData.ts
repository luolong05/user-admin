import {OptionType} from "@commonUI/select";

interface UserActive {
  value: number;
  label: string;
}

export const userAreaList: OptionType[] = [
  { value: "area1", label: 'Area-1' },
  { value: "area2", label: 'Area-2' },
  { value: "area3", label: 'Area-3' },
  { value: "area4", label: 'Area-4' },
  { value: "area5", label: 'Area-5' },
];

export const userSkillList: OptionType[] = [
  { value: "js", label: 'Javascript' },
  { value: "ts", label: 'Typescript' },
  { value: "html", label: 'Html' },
  { value: "css", label: 'Css' },
  { value: "react", label: 'React' },
];

export const userActiveList: UserActive[] = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' },
];