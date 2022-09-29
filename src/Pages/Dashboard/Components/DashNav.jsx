import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Center, Flex, HStack, Input, MenuOptionGroup, Select, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const DashNav = () => {
  return (
    <Stack p={"1%"} direction={{ base: "column", sm: "row" }} >
      <Center>
        <Text fontWeight={"semibold"} color={"#666"} size={"md"} >Dashboard</Text>
      </Center>
      <Spacer />
      <Stack direction={{ base: "column", sm: "row" }} >
        <Select borderRadius={"none"} >
          <option value='project'>Project</option>
          <option value='billability'>Billability</option>
        </Select>
        <Select borderRadius={"none"} >
          <option value='only_me'>Only Me</option>
          <option value='team'>Team</option>
        </Select>
        <HStack>
          {/* <Input type={"date"} /> */}
          <Center border="1px solid" h="40px" w="40px" >
            <ArrowBackIcon />
          </Center>
          <Center border="1px solid" h="40px" w="40px" >
            <ArrowForwardIcon />
          </Center>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default DashNav;