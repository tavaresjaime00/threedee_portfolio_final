import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import clo from "../public/images/clo.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} Popular Posts></Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Post 1"
            thumbnail={clo}
            /* Implement page-hooks to redirect to post-pages (to be created as well) */
            href="/"
          />
          <GridItem
            title="Post 2"
            thumbnail={clo}
            /* Implement page-hooks to redirect to post-pages (to be created as well) */
            href="/"
          />
          <GridItem
            title="Post 3"
            thumbnail={clo}
            /* Implement page-hooks to redirect to post-pages (to be created as well) */
            href="/"
          />
          <GridItem
            title="Post 4"
            thumbnail={clo}
            /* Implement page-hooks to redirect to post-pages (to be created as well) */
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default Posts