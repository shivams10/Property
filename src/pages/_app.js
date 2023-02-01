import "styles/globals.css";
import { Router } from "next/router";
import { Head } from "next/head";
import { NProgress } from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

// import {Lay}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
