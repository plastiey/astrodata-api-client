import {
  Box,
  Button,
  Link,
  List,
  Heading,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Chart } from "../components/chart.js";

const Home = () => (
  <Layout textAlign={"center"} w={"100%"} height={"100%"}>
    <Box display={{ md: "unset" }}>
      <Box flexGrow={1} mt={110} textAlign={"center"}>
        <Section delay={0.1}>
          <Heading as="h2" fontFamily={"Raleway, sans-serif"} fontWeight={"regular"} mb={"1.5rem"} color={"_yellow"}>
            Amplitude Chart (DST)
          </Heading>
          <Chart />
        </Section>
      </Box>
      <br />
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

          <Link>
            <Button
              color="_yellow"
            >
              chart_2
            </Button>
          </Link>

        </List>
      </Section>

    </Box>
  </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
