import { background, Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Groups from './Components/Groups';
import TeamMember from './Components/TeamMember';
import Styles from "./Team.module.css"

const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mod, setMod] = useState(false);

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

  const [groupName, setGroupName] = useState("");
  // const [groupMembers, setGroupMembers] = useState([]);
  const [groupList, setGroupList] = useState([]);

  const handleAddGroup = () => {
    let groupInfo = {
      name: groupName,
      members:[]
    }
    setGroupList([...groupList, groupInfo]);
    setGroupName("")
  }



  return (
    <>
      <Box w="100%" h="100vh" p="5%" bg="#f2f6f8" >
        <VStack w="100%" justifyContent="flex-start" >
          <Flex mb="20px" justifyContent="flex-start" w="100%" fontSize="xl" >Team</Flex>
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
                <VStack spacing="0" mt="20px" >
                  <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
                    <Text fontSize="12" >Members</Text>
                  </Flex>
                  <Flex fontSize="12px" p="1rem" w="100%" h="50px" border="1px solid #e4eaee" justifyContent="flex-start" alignItems="center" >
                    <Box textAlign="center" textTransform="capitalize" w="100%" p=" 5px 15px" >Name</Box>
                      <Box textAlign="center" w="100%" p=" 5px 15px" >Email</Box>
                      <Box textAlign="center" w="100%" p=" 5px 15px" >Billable Rate</Box>
                      <Box textAlign="center" w="100%" p=" 5px 15px" >Role</Box>
                    <Box textAlign="center" w="100%" p=" 5px 15px" >Group</Box>
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
                    <Input outline="none" h="40px" onChange={e => setGroupName(e.target.value)} fontSize="12px" bg="white" placeholder='Add a new user group' borderRadius="none" />
                    <Button _hover={{ background: "#48b6e8" }} onClick={() => {setMod(true)}} borderRadius="2px" color="white" bg='#5cc7f8' mr={3} >ADD</Button>
                  </HStack>
                </Flex>
                
                <VStack mt="20px" >
                  <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
                    <Text fontSize="12" >Groups</Text>
                  </Flex>
                  <VStack spacing="none" w="100%"  >
                    {
                      groupList.map((el) => {
                        return <Groups key={el.name} {...el} />
                      })
                    }
                  </VStack>
                </VStack>
              </TabPanel>
              <TabPanel>
                <Flex p="1rem" w="100%" h="50px" bg="#cdeefd" justifyContent="flex-start" alignItems="center" >
                  <Text fontSize="12" >STANDARD feature</Text>
                  <Button size="xs" bg="#03a9f4" borderRadius="2px" m="20px" color="white" >Upgrade</Button>
                </Flex>
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






      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={mod}
        onClose={() => setMod(false)}
        borderRadius="none"
      >
        <ModalOverlay />
        <ModalContent borderRadius="none" >
          <ModalHeader fontSize="24px" color="#666"  >Add Group</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Group Name</FormLabel>
              <Input type="email" onChange={e => setGroupName(e.target.value)} ref={initialRef} placeholder='Enter Group Name' fontSize="12px" bg="white" borderRadius="none" />
            </FormControl>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Spacer />
            <Button _hover={{ background: "white" }} fontWeight="medium" variant="ghost" color="#5cc7f8" onClick={onClose}>Cancel</Button>
            <Button onClick={() => {
              handleAddGroup();
              setMod(false);
            }} disabled={groupName.length === 0} _hover={{ background: "blue" }} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Team;