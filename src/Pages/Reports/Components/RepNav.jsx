import React from 'react';

const RepNav = () => {
  return (
    <Stack p={"1%"} direction={{ base: "column", sm: "row" }} >
      <Center>
        <Text fontWeight={"semibold"} color={"#666"} size={"md"} >Dashboard</Text>
      </Center>
      <Spacer />
      <Stack direction={{ base: "column", sm: "row" }} >
        <Select bg="white" fontSize="13px" borderRadius={"none"} >
          <option style={{ borderRadius: "0" }} value='project'>Project</option>
          <option value='billability'>Billability</option>
        </Select>
        <Select bg="white" fontSize="13px" borderRadius={"none"} >
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

export default RepNav;