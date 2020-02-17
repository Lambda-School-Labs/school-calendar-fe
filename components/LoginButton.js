import React from 'react';
import { Button, useTheme } from '@chakra-ui/core';

const LoginButton = () => {
  const theme = useTheme();
  return (
    <Button
      leftIcon={'google'}
      backgroundColor="white"
      color="#737373"
      width="300px"
      height="48px"
      rounded="2.5rem"
      boxShadow="0 0 4px rgba(0, 0, 0, 0.05), 0 0px 0px rgba(0, 0, 0, 0.08)"
    >
      <a href="/api/auth/login">Sign in with Google</a>
    </Button>
  );
};

export default LoginButton;
