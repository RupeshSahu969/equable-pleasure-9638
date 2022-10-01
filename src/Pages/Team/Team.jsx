import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Groups from './Components/Groups';
import TeamMember from './Components/TeamMember';
import Styles from "./Team.module.css"

const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [newEmail, setNewEmail] = useState("");
  const [memberList, setMemberList] = useState([]);

  const handleMemberAdd = () => {
    let str = newEmail;
    str = str.trim().split("");
    let name = ""
    if (str.includes(".") && str.indexOf('.') > str.indexOf('@')) {
      name = str.splice(0, str.indexOf('@'));
    }
    else {
      name = str.splice(0, str.indexOf('.'));
    }
    const newMem = {
      email: newEmail,
      name: name,
      role: [],
      group: "",

    }
    setMemberList([...memberList, newMem]);
    setNewEmail("")
    onClose();
  }

  const handleSearch = (e) => {
    let q = e.target.value;
    let arr = [...memberList].filter((el) => {
      return el.email.startsWith(q);
    })
    setMemberList([...arr])
  }

  const [group, setGroup] = useState("");
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupList, setGroupList] = useState([]);

  const handleAddGroup = () => {
    const groupInfo = {
      name: "",
      
    }
  }


  return (
    <>
      <Box w="100%" h="100vh" p="5%" bg="#f2f6f8" >
        <VStack w="100%" justifyContent="flex-start" >
          <Text justifyContent="flex-start" >Team</Text>
          <Tabs variant='enclosed' w="100%" gap="10px" >
            <TabList  >
              <Tab border="1px solid #c6d2d9" mr="10px" borderBottom="none" _selected={{ bg: "white", border: "1px solid #c6d2d9", borderBottom: "none" }} borderRadius="none" >MEMBERS</Tab>
              <Tab border="1px solid #c6d2d9" mr="10px" borderBottom="none" _selected={{ bg: "white", border: "1px solid #c6d2d9", borderBottom: "none" }} borderRadius="none" >GROUPS</Tab>
              <Tab border="1px solid #c6d2d9" mr="10px" borderBottom="none" _selected={{ bg: "white", border: "1px solid #c6d2d9", borderBottom: "none" }} borderRadius="none" >REMINDERS</Tab>
            </TabList>
            <TabPanels border="1px solid #c6d2d9" bg="white" h="max-content" pb="20px" >
              <TabPanel>
                <Flex>
                  <HStack w="60%">
                    <Select w="20%" bg="white" fontSize="12px" borderRadius="none" >
                      <option value="showAll" >Show All</option>
                      <option value="showActive" >Show Active</option>
                      <option value="shoeInactive" >Show Inactive</option>
                    </Select>
                    <Input onChange={e => handleSearch(e)} w="80%" fontSize="12px" bg="white" placeholder='Search by name or email' borderRadius="none" />
                  </HStack>
                  <Spacer />
                  <Button _hover={{ background: "#48b6e8" }} borderRadius="2px" onClick={onOpen} color="white" bg='#5cc7f8' mr={3} >ADD NEW MEMBER</Button>
                </Flex>
                <VStack mt="20px" >
                  <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
                    <Text fontSize="12" >Members</Text>
                  </Flex>
                  <VStack spacing="none" w="100%"  >
                    {
                      memberList.map((el) => {
                        return <TeamMember key={el.email} {...el} />
                      })
                    }
                  </VStack>
                </VStack>
              </TabPanel>
              <TabPanel>
                <Flex justifyContent="flex-end" >
                  <HStack w="40%">
                    <Input outline="none" h="40px" onChange={e => setGroup(e.target.value)} fontSize="12px" bg="white" placeholder='Add a new user group' borderRadius="none" />
                    <Button _hover={{ background: "#48b6e8" }} onClick={handleAddGroup} borderRadius="2px" color="white" bg='#5cc7f8' mr={3} >ADD</Button>
                  </HStack>
                </Flex>
                <VStack mt="20px" >
                  <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
                    <Text fontSize="12" >Groups</Text>
                  </Flex>
                  <VStack spacing="none" w="100%"  >
                    {
                      memberList.map((el) => {
                        return <Groups key={Date.now().toString().charAt(4)} {...el} />
                      })
                    }
                  </VStack>
                </VStack>
              </TabPanel>

            </TabPanels>
          </Tabs>
        </VStack>
      </Box>



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
            <Button onClick={() => { handleMemberAdd() }} disabled={newEmail.length === 0} _hover={{ background: "blue" }} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Team;