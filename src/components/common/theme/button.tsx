import { colors } from "./index";

const theme = {
  enable: {
    default: {
      border: `1px solid ${colors.default}`,
      backgroundColor: colors.default,
      fontColor: "#606266",
    },
    error: {
      border: `1px solid ${colors.error}`,
      backgroundColor: colors.error,
      fontColor: "#fff",
    },
    warning: {},
    primary: {},
  },
  disable: {
    default: {
      border: `1px solid ${colors.default}`,
      backgroundColor: colors.default,
      fontColor: "#606266",
      fontSize: "14px",
    },
    error: {
      border: `1px solid ${colors.error}`,
      backgroundColor: colors.error,
      fontColor: "#fff",
    },
    warning: {},
    primary: {},
  },
  sm: {
    padding: "4px 10px",
  },
  md: {
    padding: "6px 14px",
  },
  lg: {
    padding: "8px 18px",
  },
};

export default theme;
