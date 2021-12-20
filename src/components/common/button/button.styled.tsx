import styled from "styled-components";
import stylesConf from "@styles/button";

const buttonDisabledStyle = `
  color: rgba(0, 0, 0, 0.4);
  border-color: #ddd;
  background: #e8e8e8;
  cursor: not-allowed;
`;

export default styled.button`
  border: 1px solid transparent;
  padding: 4px 15px;
  background-color: #fff;
  color: ${(props) => props.theme.colorDefault};
  font-size: 12px;
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
