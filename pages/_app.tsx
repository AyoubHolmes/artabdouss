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
import { useState } from "react";
import { LANGUAGES, intlMessagesDispatcher } from "../utils/constants";
import { IntlProvider } from "react-intl";
import Header from "../components/Header";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// later we'll modify this to its own file
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  // If there's no emotionCache rendered by the server, use the clientSideEmotionCache
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <EmotionProvider theme={emotionTheme}>
        <ThemeProvider theme={defaultTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <IntlProvider
            locale={language}
            messages={intlMessagesDispatcher[language]}
          >
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </EmotionProvider>
    </CacheProvider>
  );
};

export default MyApp;
