import { DragHandleIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

const TeamMember = ({ email, name }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [rate, setRate] = useState(0);
  const [input, setInput] = useState(0)
  console.log(rate)

  const handleRateChange = (e) => {
    setRate(input);
    setInput(0);
    onClose();
  }

  return (
    <>
      <Box fontSize="14px" w="100%" color="#666666" >
        <HStack spacing="none" border="1px solid #c6d2d9" p="5px 10px" >
          <Box textTransform="capitalize" w="100%" p=" 5px 15px" >{name}</Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >{email}</Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >
            <HStack fontSize="11.9px" spacing="none">
              <Box p="5px" w="56px" border="1px solid #c6d2d9" bg="#f2f6f8" h="50%" >{rate}</Box>
              <Box _hover={{ cursor: "pointer" }} onClick={onOpen} fontWeight="semibold" color="#5cc7f8" p="5px" w="56px" border="1px solid #c6d2d9" h="50%">Change</Box>
            </HStack>
          </Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >Role</Box>
          <Box borderLeft="1px solid #c6d2d9" w="100%" p=" 5px 15px" >Group</Box>
          <Box h="100%" _hover={{ cursor: "pointer" }} ><DragHandleIcon /></Box>
        </HStack>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}

      >
        <ModalOverlay />
        <ModalContent fontSize="14px" borderRadius="none" >
          <ModalHeader>Edit Rate</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody pb={6}>
            <Text bg="#cdeefd" p="1rem" color="#02587f" >
              We'll apply this rate to all entries made by Akshay Puranik, except on projects that have their own rate.
            </Text>

            <FormControl mt={4}>
              <FormLabel>What is the new billable rate</FormLabel>
              <Input onChange={e => setInput(e.target.value)} type="number" w="50%" borderRadius="none" placeholder='0' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Spacer />
            <Button _hover={{ background: "white" }} fontWeight="medium" variant="ghost" color="#5cc7f8" onClick={onClose}>Cancel</Button>
            <Button _hover={{ background: "#48b6e8" }} onClick={e => handleRateChange(e)} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeamMember;