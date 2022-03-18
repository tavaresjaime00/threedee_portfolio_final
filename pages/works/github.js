import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="My Github Repositories">
      <Container>
        <Title>
          My Github <Badge>2016 to Present</Badge>
        </Title>
        <P>
          This is where all of my projects are stored and consistently updated
          as I learn and continue my career in programming and technology.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.github.com/tavaresjaime00/">
              https://www.github.com/tavaresjaime00/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Frequently Used Languages</Meta>
            <span>Javascript, React, HTML, CSS, Dart, Swift, Java, C#</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/github-logo.png"
          alt="Github site logo"
        />
      </Container>
    </Layout>
  );
};
export default Work;
