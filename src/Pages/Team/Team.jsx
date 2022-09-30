import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import TeamMember from './Components/TeamMember';

const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [newEmail, setNewEmail] = useState("")

  return (
    <Box w="100%" h="100vh" p="5%" bg="#f2f6f8" >
      <VStack w="100%" justifyContent="flex-start" >
        <Text justifyContent="flex-start" >Team</Text>
        <Tabs variant='enclosed' w="100%" gap="10px" >
          <TabList  >
            <Tab border="1px solid #c6d2d9" borderBottom="none" _selected={{ bg: "white" }} borderRadius="none" >MEMBERS</Tab>
            <Tab border="1px solid #c6d2d9" borderBottom="none" _selected={{ bg: "white" }} borderRadius="none" >GROUPS</Tab>
            <Tab border="1px solid #c6d2d9" borderBottom="none" _selected={{ bg: "white" }} borderRadius="none" >REMINDERS</Tab>
          </TabList>
          <TabPanels border="1px solid #c6d2d9" bg="white" h="max-content" pb="40px" >
            <TabPanel>
              <Flex>
                <HStack w="60%">
                  <Select w="20%" bg="white" fontSize="12px" borderRadius="none" >
                    <option value="showAll" >Show All</option>
                    <option value="showActive" >Show Active</option>
                    <option value="shoeInactive" >Show Inactive</option>
                  </Select>
                  <Input w="80%" fontSize="12px" bg="white" placeholder='Search by name or email' borderRadius="none" />
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
              <VStack mt="20px" >
                <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
                  <Text fontSize="12" >Members</Text>
                </Flex>
                <VStack w="100%"  >
                  <TeamMember/>
                  <TeamMember/>
                  <TeamMember/>
                  <TeamMember/>
                  
                </VStack>
              </VStack>









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