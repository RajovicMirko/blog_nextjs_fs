import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { PropsWithChildren, useEffect } from "react";
import createEmotionCache from "./createEmotionCache";
import GlobalStyles from "./GlobalStyles";
import { MuiModeProvider } from "./hooks/useMuiMode";
import MuiThemeProvider from "./theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type IMuiProvider = {
  emotionCache?: EmotionCache;
};

type IMuiProviderReturn = JSX.Element | null;

const MuiProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: PropsWithChildren<IMuiProvider>): IMuiProviderReturn => {
  useEffect(() => {
    () => {
      const jssStyles = document.querySelector("#jss-ssr");

      if (jssStyles && jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    };
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <MuiModeProvider>
          <MuiThemeProvider>
            <CssBaseline />
            <GlobalStyles />
            {children}
          </MuiThemeProvider>
        </MuiModeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

export default MuiProvider;
