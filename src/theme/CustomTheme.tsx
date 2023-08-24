import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F6EFB",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

interface Props {
  children?: React.ReactNode;
}

const CustomTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default CustomTheme