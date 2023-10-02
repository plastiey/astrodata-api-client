import {
  Box,
  //Button,
  //chakra,
  //Container,
  Heading,
  //Link,
  //List,
  //ListItem,
  //useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Chart } from "../components/chart.js";

const Home = () => (
  <Layout textAlign={"center"}>
    <Box display={{ md: "unset" }}>
      <Box flexGrow={1} mt={5} textAlign={"center"}>
        <Heading as="h2" variant="page-title">
          magneconn
        </Heading>
        <p>
          
        </p>
        <br />
        <Section delay={0.1} mb={5} >
          <Chart />
        </Section>

      </Box>
    </Box>
  </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
