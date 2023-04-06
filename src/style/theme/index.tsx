import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import useMuiMode from "../hooks/useMuiMode";

import components from "./components";
import mixins from "./mixins";
import palette from "./palette";

export type IMuiThemeProvider = PropsWithChildren;

const MuiThemeProvider = ({ children }: IMuiThemeProvider) => {
  const { mode } = useMuiMode();

  const theme = createTheme({
    components,
    mixins,
    palette: palette({ mode }),
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
