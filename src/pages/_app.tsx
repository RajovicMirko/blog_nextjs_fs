import type { AppProps } from "next/app";
import MuiProvider, { IMuiProvider } from "src/styles";

export type IAppProps = AppProps & IMuiProvider;

export default function App(props: IAppProps) {
  const { Component, pageProps, emotionCache } = props;

  return (
    <MuiProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </MuiProvider>
  );
}
