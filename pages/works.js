import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue,
  useColorMode,
  useColorModePreference,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbGithub from "../public/images/works/github-logo.jpg";
import gcpSite from "../public/images/works/gcp.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="github" title="My Github" thumbnail={thumbGithub}>
              This is where all of my projects are stored and consistently
              updated as I learn and continue my career in programming and
              technology.
            </WorkGridItem>
            <WorkGridItem
              id="gcp"
              title="Great Canadian Pizza Website"
              thumbnail={gcpSite}
            >
              For 5+ years, I have managed this client's website, forming strong
              relationships with all personnel, and communicating to make
              changes to the sites quickly and efficiently, including the
              implementation of a brand new Menu-Page design.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from '../components/chakra'
