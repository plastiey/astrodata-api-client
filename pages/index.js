import React, { useState } from 'react';
import {
    Box,
    Button,
    Link,
    List,
    Heading,
    Center,
    Flex,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Chart } from "../components/chart.js";
import { Chart2 } from "../components/chart2.js";
import { Chart3 } from "../components/chart3.js";

const Home = () => {
    const [selectedChart, setSelectedChart] = useState("chart1");

    const handleChartSwitch = (chartName) => {
        setSelectedChart(chartName);
    };

    const chartWidth = 1200;
    const chartHeight = 600;

    return (
        <Layout textAlign={"center"} w={"100%"} height={"100%"}>
            <Box display={{ md: "unset" }}>
                <Box flexGrow={1} mt={120} textAlign={"center"} >
                    <Section delay={0.1}>
                        <Heading as="h2" fontFamily={"Ubuntu, sans-serif"} fontWeight={"regular"} mb={"1.5rem"} color={"_yellow"}>
                            Amplitude Chart (DST)
                        </Heading>
                        <Center>
                            {selectedChart === "chart1" ? <Chart width={chartWidth} height={chartHeight} /> : selectedChart === "chart2" ? <Chart2 width={chartWidth} height={chartHeight} /> : <Chart3 width={chartWidth} height={chartHeight} />}
                        </Center>
                    </Section>
                </Box>
                <Box>
                    <Flex justifyContent="center" alignItems="center" alignContent={"space-between"}>
                        <List style={{ textAlign: "center" }}>
                            <Link>
                                <Button
                                    mr={10}
                                    colorScheme={selectedChart === "chart1" ? "orange" : undefined}
                                    onClick={() => handleChartSwitch("chart1")}
                                >
                                    chart_1
                                </Button>
                            </Link>
                            <Link>
                                <Button
                                    mr={10}
                                    colorScheme={selectedChart === "chart2" ? "orange" : undefined}
                                    onClick={() => handleChartSwitch("chart2")}
                                >
                                    chart_2
                                </Button>
                            </Link>
                            <Link mr={10}>
                                <Button
                                    colorScheme={selectedChart === "chart3" ? "orange" : undefined}
                                    onClick={() => handleChartSwitch("chart3")}
                                >
                                    chart_3
                                </Button>
                            </Link>
                        </List>
                    </Flex>
                </Box>
            </Box>
        </Layout >
    );
};

export default Home;
