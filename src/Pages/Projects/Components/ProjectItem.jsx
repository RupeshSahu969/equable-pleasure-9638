import { DeleteIcon, DragHandleIcon, StarIcon } from '@chakra-ui/icons';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';

const ProjectItem = ({ name, client, tracked, amount, progress, access, color }) => {

  const [star, setStar] = useState(false);


  return (
    <Box fontSize="14px" w="100%" color="#666666" >
      <HStack fontSize="12px" spacing="none" border="1px solid #c6d2d9" p="5px 10px" >
        <Box h="20px" rounded="full" backgroundColor={color} w="20px" ></Box>
        <Box textTransform="capitalize" w="100%" p=" 5px 15px" >{name}</Box>
        {/* <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{client.join(", ")}</Box> */}
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >
          {tracked}
        </Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{amount}</Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{progress}</Box>
        <Box mr="100px" onClick={() => setStar(!star)} h="100%" _hover={{ cursor: "pointer" }} pr="30px" ><StarIcon color={
          star ? "red" : "gray"
        } /></Box>
        <Box h="100%" _hover={{ cursor: "pointer" }} ><DeleteIcon /></Box>
      </HStack>
    </Box>
  );
};

export default ProjectItem;