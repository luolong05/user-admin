import styled from "styled-components";
import stylesConf from "@styles/button";

const buttonDisabledStyle = `
  color: ${stylesConf.disableFontColor};
  border-color: ${stylesConf.disabledBorderColor};
  background: ${stylesConf.disabledBackgroundColor};
  cursor: not-allowed;
`;

export default styled.button`
  border: ${stylesConf.defaultBorder};
  padding: ${stylesConf.paddingMd};
  background-color: ${stylesConf.defaultBackgroundColor};
  color: ${stylesConf.defaultFontColor};
  font-size: ${stylesConf.fontSizeMd};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
  }
  &.btn-primary {
    border: ${stylesConf.primaryBorder};
    background-color: ${stylesConf.primaryBackgroundColor};
    color: ${stylesConf.primaryFontColor};
    &:hover {
    }
  }
  &.btn-sm {
    padding: ${stylesConf.paddingSm};
    font-size: ${stylesConf.fontSizeSm};
  }
  &.btn-md {
    padding: ${stylesConf.paddingMd};
    font-size: ${stylesConf.fontSizeMd};
  }
  &.btn-lg {
    padding: ${stylesConf.paddingLg};
    font-size: ${stylesConf.fontSizeLg};
  }
  &[disabled] {
    ${buttonDisabledStyle}
    &:hover,
    &:focus {
      ${buttonDisabledStyle}
    }
  }
`;
