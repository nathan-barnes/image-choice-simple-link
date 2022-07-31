import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
// import App from "./App";
import Layout from "./components/Layout.jsx";
import theme from "./MuiTheme";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Layout />
  </ThemeProvider>,
  document.querySelector("#root")
);

