import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container, Spinner } from "@chakra-ui/react";
import { Router } from "next/router";
import VoxelDonut from "../voxel-donut.js";
import VoxelDonutLoader from "../voxel-donut-loader";
import dynamic from "next/dynamic";
4

const LazyVoxelDonut = dynamic(() => import("../voxel-donut"), {
  ssr: false,
  loading: () => <VoxelDonutLoader />,
});

const Main = ({ children, footer }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jaime Tavares - Homepage</title>
      </Head>

      <Navbar path={Router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDonut />
        
        {children}
      </Container>
    </Box>
  );
};
export default Main;
