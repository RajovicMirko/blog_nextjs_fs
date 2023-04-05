import { CacheProvider, EmotionCache } from "@emotion/react";
import { PropsWithChildren, useEffect } from "react";
import createEmotionCache from "./createEmotionCache";
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
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <MuiModeProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </MuiModeProvider>
    </CacheProvider>
  );
};

export default MuiProvider;
