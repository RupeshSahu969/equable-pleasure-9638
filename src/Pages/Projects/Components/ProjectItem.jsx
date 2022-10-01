import { DeleteIcon, DragHandleIcon, StarIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

const ProjectItem = ({name,client,tracked,amount,progress,access}) => {
  return (
    <Box fontSize="14px" w="100%" color="#666666" >
      <HStack fontSize="12px" spacing="none" border="1px solid #c6d2d9" p="5px 10px" >
        <Box textTransform="capitalize" w="100%" p=" 5px 15px" >{name}</Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{client.join(", ")}</Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >
          {tracked}
        </Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{amount}</Box>
        <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{progress}</Box>
        <Box h="100%" _hover={{ cursor: "pointer" }} pr="30px" ><StarIcon /></Box>
        <Box h="100%" _hover={{ cursor: "pointer" }} ><DeleteIcon /></Box>
      </HStack>
    </Box>
  );
};

export default ProjectItem;