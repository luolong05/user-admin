export type FormRuleMaxLengthType = number | undefined;
export interface FormValidateRules {
  required?: boolean;
  trigger?: string;
  message?: string;
  validator?: () => void
}

export interface FormRules {
  maxLength?: FormRuleMaxLengthType;
  required?: boolean;
  validates?: Array<FormValidateRules>
}