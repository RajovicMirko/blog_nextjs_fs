import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import createEmotionCache from "./createEmotionCache";
import theme from "./theme";

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
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MuiProvider;
