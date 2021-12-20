import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import GlobalTheme from "@/styles/global/theme";
import HomePage from "@modules/home";

ReactDOM.render(
  <ThemeProvider theme={GlobalTheme}>
    <React.StrictMode>
      <GlobalStyle />
      <HomePage />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
