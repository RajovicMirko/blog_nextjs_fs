import { CacheProvider, EmotionCache } from "@emotion/react";
import { PropsWithChildren } from "react";
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
}: PropsWithChildren<IMuiProvider>): IMuiProviderReturn => (
  <CacheProvider value={emotionCache}>
    <MuiModeProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </MuiModeProvider>
  </CacheProvider>
);

export default MuiProvider;
