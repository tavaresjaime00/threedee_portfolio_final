import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Great Canadian Pizza Site">
      <Container>
        <Title>
          Great Canadian Pizza <Badge>2016 to Present</Badge>
        </Title>
        <P>
          For 5+ years, I have managed this client-website, forming strong
          relationships with all personnel, and communicating to make changes to
          the sites quickly and efficiently, including the implementation of a
          brand new Menu-Page design.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.greatcanadianpizza.ca/">
              https://www.greatcanadianpizza.ca/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web/Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, HTML, CSS, JS</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/gcp.png"
          alt="Great Canadian Pizza site"
        />
      </Container>
    </Layout>
  );
};
export default Work;
