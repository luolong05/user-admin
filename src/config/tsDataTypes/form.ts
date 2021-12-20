export interface formItemValidateRules {
  required?: boolean;
  trigger?: string;
  message?: string;
  validator?: () => void
}

export interface formItemRules {
  maxLength?: number;
  required?: boolean;
  validates?: Array<formItemValidateRules>
}