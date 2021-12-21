import globalTheme from "@/styles/global/theme";

export default {
  defaultBorder: `1px solid ${globalTheme.colorDefault}`,
  primaryBorder: `1px solid ${globalTheme.colorPrimary}`,
  errorBorder: `1px solid ${globalTheme.colorError}`,
  defaultBackgroundColor: "#fff",
  primaryBackgroundColor: globalTheme.colorPrimary,
  errorBackgroundColor: globalTheme.colorError,
  defaultFontColor: globalTheme.textDefaultColor,
  primaryFontColor: "#fff",
  errorFontColor: "#fff",
  disabledBorderColor: '#ddd',
  disabledBackgroundColor: '#e8e8e8',
  disableFontColor: '#bdbdbd',
  paddingSm: "4px 10px",
  paddingMd: "6px 15px",
  paddingLg: "8px 18px",
  fontSizeSm: "12px",
  fontSizeMd: globalTheme.textDefaultFontSize,
  fontSizeLg: "16px",
  borderRadius: '2px'
};
