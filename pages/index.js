import {
  Box,
  Button,
  Chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Chart } from "../components/chart.js";

const Home = () => (
  <Layout textAlign={"center"}>
    <Box display={{ md: "unset" }}>
      <Box flexGrow={1} mt={50} textAlign={"center"}>
        <Section delay={0.1}>
          <Chart />
        </Section>
      </Box>
      <br />
      <Container 
        display="flex"
        p={3}
        justify="space-evenly"
      >
        <Section delay={0.3}>
          <List style={{ textAlign: "center" }}>
              
              <Link mr={12}>
                <Button
                  color="_yellow"
                >
                  chart_1
                </Button>
              </Link>


              <Link mr={12}>
                <Button
                  color="_yellow"
                >
                  chart_2
                </Button>
              </Link>

              <Link mr={12}>
                <Button
                  color="_yellow"
                >
                  chart_2
                </Button>
              </Link>

          </List>
        </Section>
      </Container>

    </Box>
  </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
