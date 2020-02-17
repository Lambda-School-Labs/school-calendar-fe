import React, { useEffect } from "react";
import Router from "next/router";

const Redirect = () => {
  useEffect(() => {
    Router.push("/dashboard");
  }, []);
  return null;
};

// Redirect.getInitialProps = async () => {
//   Router.push("/dashboard");
// };

export default Redirect;
