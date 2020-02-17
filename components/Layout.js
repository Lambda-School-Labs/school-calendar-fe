import NextLink from 'next/link';
import Head from 'next/head';
import { Link as StyledLink, Heading, Text } from '@chakra-ui/core';
import { Stack, Flex, Box, Grid } from '@chakra-ui/core';
import Header from './Header';

const Layout = ({ children, showHeader = true }) => (
  <Stack pos="relative" w="100%" h="100vh">
    <Head>
      <title>D8Picker</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {showHeader ? <Header /> : null}

    {children}
  </Stack>
);

export default Layout;
