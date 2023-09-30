import {
  Box,
  //Button,
  chakra,
  //Container,
  Heading,
  //Link,
  //List,
  //ListItem,
  //useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
//import { IoLogoGithub } from "react-icons/io5";
//import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>

    <Box display={{ md: "flex" }}>
      <Box flexGrow={1} mt={5}>
        <Heading as="h2" variant="page-title">
          first title here
        </Heading>
        <p>
          some title
        </p>
      </Box>
    </Box>

    <br />

    <Section delay={0.1}>
      <Paragraph>
        some text
      </Paragraph>
      <Heading as="h2" variant="section-title">
        some tect
      </Heading>
      <Paragraph>
        some text
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h2" variant="section-title">
        some text here
      </Heading>
      <Paragraph>
        some text here
      </Paragraph>
    </Section>
    <br />

    <Section delay={0.3}>
      <Heading as="p" variant="section-title">
        some text here
      </Heading>
      <Paragraph>
        some text here
      </Paragraph>
    </Section>
    <br />

    <Section delay={0.3}>
      <Heading as="h2" variant="section-title">
        some heading here too
      </Heading>
      <Paragraph>
        some text here
      </Paragraph>
    </Section>
  </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
