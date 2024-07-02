/* import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { modeDark, modeLight } from "./paletas";

export const AppMui = ({ children }) => {
  
  const { modeApp } = useSelector((state) => state.reducerMui);

  const tema = createTheme({
    palette: {
      mode: modeApp,
      ...(modeApp === "light" ? modeLight : modeDark),
    },
  });
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}; */
 


/* ----------------------------------------------- */



import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { modeDark, modeLight } from "./paletas";

export const AppMui = ({ children }) => {
  const { modeApp } = useSelector((state) => state.reducerMui);

  const tema = createTheme({
    palette: {
      mode: modeApp,
      ...(modeApp === "light" ? modeLight : modeDark),
    },
    typography: {
      h1: {
        fontSize: 46,
      },
      fontSize: 15,
      fontFamily:"utec_roman"
    },
  });

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
