import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";

const Groups = ({ groupName, members }) => {
  return (
    <>
      <Box fontSize="14px" w="100%" color="#666666" >
        <HStack spacing="none" border="1px solid #c6d2d9" p="5px 10px" >
          <Box textTransform="capitalize" w="100%" p=" 5px 15px" >{groupName}</Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{members}</Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" ><EditIcon/></Box>
          <Box h="100%" _hover={{ cursor: "pointer" }} ><CloseIcon /></Box>
        </HStack>
      </Box>
    </>
  )
}

export default Groups;