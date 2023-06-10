// pages/_app.tsx
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  CacheProvider,
  EmotionCache,
  ThemeProvider as EmotionProvider,
} from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import defaultTheme from "../themes/defaultTheme";
import { emotionTheme } from "../themes/emotionTheme";
import { LanguageProvider } from "utils/context";
import "./globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// later we'll modify this to its own file
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LanguageProvider>
        <EmotionProvider theme={emotionTheme}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </EmotionProvider>
      </LanguageProvider>
    </CacheProvider>
  );
};

export default MyApp;
