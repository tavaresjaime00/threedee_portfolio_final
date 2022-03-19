import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container, Spinner } from "@chakra-ui/react";
import { Router } from "next/router";
import VoxelDonutLoader from "../voxel-donut-loader";
import dynamic from "next/dynamic";
import Footer from '../footer';

const LazyVoxelDonut = dynamic(() => import("../voxel-donut"), {
  ssr: false,
  loading: () => <VoxelDonutLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jaime's homepage" />
        <meta name="author" content="Jaime Tavares" />
        <meta name="author" content="tavaresjaime00" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jaimetavares00" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Jaime Tavares' Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Jaime Tavares - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDonut />
        
        {children}

        <Footer />
      </Container>
    </Box>
  );
};
export default Main;
