import { ArrowBackIcon, ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Center, Flex, HStack, Input, Menu, MenuButton, MenuList, MenuOptionGroup, Select, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

const DashNav = () => {



  // var BarChart = require('barchart');

  // var bc = new BarChart({
  //   barColors: ['#00AB8E', '#33CCDD'],
  //   labelInsideColors: ['#FFF', '#333'],
  //   autoScale: true,
  //   minimum: 0,
  //   maximum: 100,
  //   container: document.getElementById('chart-container')
  // });


  // bc.data([[
  //   { "name": "#1", "value": 12 },
  //   { "name": "#2", "value": 20 },
  //   { "name": "#3", "value": 30 },
  //   { "name": "#4", "value": 70 },
  //   { "name": "#5", "value": 63 },
  //   { "name": "#6", "value": 35 }
  // ], [
  //   { "name": "#1'", "value": 2 },
  //   { "name": "#2'", "value": 10 },
  //   { "name": "#3'", "value": 3 },
  //   { "name": "#4'", "value": 7 },
  //   { "name": "#5'", "value": 6 },
  //   { "name": "#6'", "value": 3 }
  // ]]
  // );



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
        <Select w="100%" bg="white" fontSize="13px" borderRadius={"none"} >
          <option value='only_me'>Only Me</option>
          <option value='team'>Team</option>
        </Select>
        <Menu>
          <MenuButton w="100%" bg="white" fontSize="13px" borderRadius={"none"} as={Button} rightIcon={<ChevronDownIcon />}>
            Today
          </MenuButton>
          <MenuList>
            <Calendar />
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default DashNav;