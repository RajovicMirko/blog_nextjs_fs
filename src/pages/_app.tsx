import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Layout from "src/components/Layout";
import { PageLoading } from "src/components/Loading/PageLoading";
import { LoadingProvider } from "src/context/LoadingContext";
import MuiProvider, { IMuiProvider } from "src/style";

const queryClient = new QueryClient({});

export type IAppProps = AppProps & IMuiProvider;

export default function App(props: IAppProps) {
  const { Component, pageProps, emotionCache } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <MuiProvider emotionCache={emotionCache}>
        <LoadingProvider component={<PageLoading />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LoadingProvider>
      </MuiProvider>
    </QueryClientProvider>
  );
}
