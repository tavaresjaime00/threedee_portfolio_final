import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m an Information Systems Engineer based in Canada!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jaime Tavares
            </Heading>
            <p>
              Digital Freelancer ( Student / Webmaster / Info-Sys. Engineer )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/jaime.png"
              alt="Profile"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Jaime is a freelancer and a full-time student at Sheridan College.
            With a passion for learning, and an eagerness to build interactive
            and creative web-apps, he is always looking for new problems to
            solve with his extensive background in web-development and
            general-technology.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Ontario, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed Ontario Secondary School Diploma at Loyola Catholic
            School.
          </BioSection>
          <BioSection>
            <BioYear>2016 to Present</BioYear>
            Worked at Great Canadian Pizza as Team-Member and{" "}
            <Link href="https://www.greatcanadianpizza.ca" passHref>
              Wordpress/Technology-Manager
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed Advanced Diploma in Information Systems Engineering at
            Sheridan College.
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I &#10084;
          </Heading>
          <Paragraph>
            Learning, Music, Saxophone-Practice, Crafts,{" "}
            <Link href="www.github.com/tavaresjaime00">Programming</Link>,
            Web-Design/Development (Full-Stack), Video Games
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On The Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.github.com/tavaresjaime00" target="_blank" passHref>
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@tavaresjaime00</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.twitter.com/jaimetavares00" target="_blank" passHref>
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>@jaimetavares00</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/jaime.css" target="_blank" passHref>
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>@jaime.css</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/532904981372731392" target="_blank" passHref>
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>@jaytav#6405</Button>
              </Link>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  );
};
export default Page;
