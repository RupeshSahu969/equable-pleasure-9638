import { Box, Center, Flex, HStack, Select, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Chart } from './Chart';
import { DoughnutChart } from './DoughnutChart';

const DashReport = () => {
  return (
    <div style={{ padding: "1%" }}  >
      <Stack direction={{ base: "column", md: "row" }}>
        <VStack spacing="none" w={{ base: "100%", md: "80%" }} >
          <div style={{ width: "100%", border: "1px solid #c6d2d9", height: "100px" }}>
            <HStack spacing="none" bg="#c6d2d9" >
              <div style={{ height: "100px", width: "33%" }}>
                <Center h="100%" >
                  <VStack>
                    <Text fontSize="14px" color="#90a4ae" >Total Time</Text>
                    <Text fontSize="20px" >time goes here</Text>
                  </VStack>
                </Center>
              </div>
              <div style={{ height: "100px", width: "34%" }}>
                <Center h="100%" >
                  <VStack>
                    <Text fontSize="14px" color="#90a4ae" >Top Project</Text>
                    <Text fontSize="20px" >--</Text>
                  </VStack>
                </Center>
              </div>
              <div style={{ height: "100px", width: "33%" }}>
                <Center h="100%" >
                  <VStack>
                    <Text fontSize="14px" color="#90a4ae" >Top Client</Text>
                    <Text fontSize="20px" >--</Text>
                  </VStack>
                </Center>
              </div>

            </HStack>
          </div>
          <VStack w="100%" >
            <div style={{ backgroundColor: "white", width: "100%", height: "500px", border: "1px solid #c6d2d9" }}>
              <Chart />
            </div>
            <Flex justifyContent="flex-start" >
              <DoughnutChart />
            </Flex>
          </VStack>
        </VStack>
        <Stack bg="white" border="1px solid #c6d2d9" w={{ base: "100%", md: "20%" }} >
          <Box bg={"#c6d2d9"} >
            <Flex p="3%" pl="5%"  >
              <Center>
                <Text fontSize="12px" color="#999999" >Most Tracked activities</Text>
              </Center>
              <Spacer />
              <Select bg="none" border="none" outline="none" fontSize="12px" w="40%" >
                <option value="top10">Top 10</option>
                <option value="all">All</option>
              </Select>
            </Flex>
          </Box>
          <Box p="3%" h="min-content" >
            {"Project Data here"}
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default DashReport;