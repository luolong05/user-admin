import React from "react";
import styled from "styled-components";
import { buttonTheme } from "../theme";
import { getKeyValue } from "@/utils/ts";

interface buttonProps {
  type: "default" | "error" | "warning" | "primary";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  text: string;
  onClick: (event: any) => void;
}

interface btnThemByStatus {
  border: string;
  backgroundColor: string;
  fontColor: string;
}

const getBtnThemByStatus: (
  disabled: boolean,
  type: buttonProps["type"]
) => btnThemByStatus = (disabled, type) => {
  const status: "disable" | "enable" = disabled ? "disable" : "enable";
  const themByDisabled = getKeyValue(buttonTheme, status);
  const themByType = getKeyValue(themByDisabled, type);

  return themByType as btnThemByStatus;
};

const Button = styled.button`
  border: ${(props: buttonProps) =>
    getBtnThemByStatus(props.disabled, props.type).border};
  cursor: pointer;
`;
