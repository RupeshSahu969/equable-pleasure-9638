import { Center, Input, MenuOptionGroup, Select, Spacer, Stack, Text } from '@chakra-ui/react';
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
        <Input type={"date"} />
      </Stack>
    </Stack>
  );
};

export default DashNav;