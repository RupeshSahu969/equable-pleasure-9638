import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [newEmail, setNewEmail] = useState("")


  return (
    <Box p="5%" bg="#f2f6f8" >
      <VStack>
        <Heading >Team</Heading>
        <Tabs>
          <TabList>
            <Tab>MEMBERS</Tab>
            <Tab>GROUPS</Tab>
            <Tab>REMINDERS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex>
                <HStack>
                  <Select bg="white" fontSize="12px" borderRadius="none" >
                    <option value="showAll" >Show All</option>
                    <option value="showActive" >Show Active</option>
                    <option value="shoeInactive" >Show Inactive</option>
                  </Select>
                  <Input fontSize="12px" bg="white" placeholder='Search by name or email' borderRadius="none" />
                </HStack>
                <Spacer />
                <Button borderRadius="none" variant="solid" colorScheme="blue" onClick={onOpen} >ADD NEW MEMBER</Button>
              </Flex>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                borderRadius="none"
              >
                <ModalOverlay />
                <ModalContent borderRadius="none" >
                  <ModalHeader fontSize="24px" color="#666"  >Add Members</ModalHeader>
                  <ModalCloseButton />
                  <Divider />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" onChange={e => setNewEmail(e.target.value)} ref={initialRef} placeholder='Enter Email Address' fontSize="12px" bg="white" borderRadius="none" />
                    </FormControl>

                    <FormControl mt={4}>
                      <Flex>
                        <Center>
                          <input type="checkbox" />
                        </Center>
                        <Center>
                          <Text fontSize="14px" ml="8px" >Send an invite email</Text>
                        </Center>
                      </Flex>
                    </FormControl>
                  </ModalBody>
                  <Divider />
                  <ModalFooter>
                    <Spacer />
                    <Button _hover={{ background: "white" }} fontWeight="medium" variant="ghost" color="#5cc7f8" onClick={onClose}>Cancel</Button>
                    <Button disabled={newEmail.length === 0} _hover={{ background: "blue" }} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
                      ADD
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>










            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default Team;