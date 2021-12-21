import styled from "styled-components";
import stylesConf from "@styles/input"

export default styled.input`
  border: 1px solid ${stylesConf.defaultBorderColor};
  padding: ${stylesConf.paddingMd};
  width: 100%;
  background-color: ${stylesConf.backgroundColor};
  color: ${stylesConf.color};
  &:focus {
    border-color: ${stylesConf.activeBorderColor};
  }
  &.input-error {
    border-color: ${stylesConf.errorBorderColor};
    &:focus {
      border-color: ${stylesConf.errorBorderColor};
    }
  }
  &.input-success {
    border-color: ${stylesConf.successBorderColor};
    &:focus {
      border-color: ${stylesConf.successBorderColor};
    }
  }
  &.input-sm {
    padding: ${stylesConf.paddingSm};
    font-size: ${stylesConf.fontSizeSm};
  }
  &.input-md {
    padding: ${stylesConf.paddingMd};
    font-size: ${stylesConf.fontSizeMd};
  }
  &.input-lg {
    padding: ${stylesConf.paddingLg};
    font-size: ${stylesConf.fontSizeLg};
  }
  &[disabled] {
    border-color: ${stylesConf.disabledBorderColor};
    background-color: ${stylesConf.disabledBackgroundColor};
    color: ${stylesConf.disableFontColor};
    cursor: not-allowed;
    &:focus {
      border-color: ${stylesConf.disabledBorderColor};
      background-color: ${stylesConf.disabledBackgroundColor};
      color: ${stylesConf.disableFontColor};
    }
  }
`