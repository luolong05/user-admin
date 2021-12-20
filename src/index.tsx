import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import GlobalTheme from "@/styles/global/theme";
import UserForm from "@modules/userForm";

ReactDOM.render(
  <ThemeProvider theme={GlobalTheme}>
    <React.StrictMode>
      <GlobalStyle />
      <UserForm />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
