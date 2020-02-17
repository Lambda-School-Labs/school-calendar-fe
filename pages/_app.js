import React, { useEffect } from 'react';
// import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { initGA, logPageView } from '../utils/analytics';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, [Router]);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
