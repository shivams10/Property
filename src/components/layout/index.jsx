import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components/navbar";
import { Footer } from "components/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Property</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
