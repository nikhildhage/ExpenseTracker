import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const rootElement = document.getElementById("root")!; // Use non-null assertion
const root = ReactDOM.createRoot(rootElement);

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C0C0C0", // A nice blue color
      light: "#6ec6ff",
      dark: "#1976d2",
    },
    secondary: {
      main: "#ff4081", // A vibrant pink
      light: "#ff79b0",
      dark: "#c60055",
    },
    background: {
      default: "#000838",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none", // Prevents automatic uppercase transformation
    },
  },
  shape: {
    borderRadius: 8,
  },
});
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
