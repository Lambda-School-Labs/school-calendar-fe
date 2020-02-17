import React from 'react';
import { Link as NextLink } from 'next/link';
import { Link, Flex, Box, Image } from '@chakra-ui/core';

const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      justify="space-between"
      align="center"
      backgroundColor="white"
      p={6}
      boxShadow="0 6px 15px 0 rgba(0,0,0,0.07);"
    >
      <Box width="150px">
        <Image src="/logo.png" alt="logo" />
      </Box>
      <nav>
        <Link as={NextLink} href="/">
          <a>Home</a>
        </Link>
      </nav>
    </Flex>
  );
};

export default Header;
