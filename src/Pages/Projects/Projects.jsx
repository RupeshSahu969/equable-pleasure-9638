import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectItem from "./Components/ProjectItem";

const Projects = () => {
  const item = {
    name: "project name",
    client: ["this", "that"],
    tracked: "8000",
    amount: "5000 USD",
    progress: "40%",
    access: "",
    isStarred: "",
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newProject, setNewProject] = useState(item);
  const [projectList, setProjectList] = useState([]);

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)




  return (
    <>
      <Box p="5% 2%" w="100%" h="100vh" >
        <VStack>
          <Stack w="100%" p={"1% 0"} direction={{ base: "column", sm: "row" }} >
            <Center>
              <Text fontWeight={"semibold"} color={"#666"} size={"md"} >Projects</Text>
            </Center>
            <Spacer />
            <Button _hover={{ background: "#48b6e8" }} borderRadius="2px" onClick={onOpen} color="white" bg='#5cc7f8' mr={3} >CREATE NEW PROJECT</Button>
          </Stack>

          {/* <HStack>
          <HStack>
            <Box w="100%" >Filter</Box>
            <Box w="100%" >Access</Box>
            <Box w="100%" >Client</Box>
            <Box w="100%" >Billing</Box>
          </HStack>
          <Box w="100%" ><SearchIcon /></Box>
          <Input w="100%" placeholder="Project Name" />
          <Button variant="outline" color="#03a9f4" borderColor="#03a9f4" >Apply Filter</Button>
        </HStack> */}
          <VStack fontSize="12px" mt="20px" w="100%" spacing="none" >
            <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
              <Text fontSize="12" >Projects</Text>
            </Flex>
            <VStack spacing="none" w="100%"  >

              <ProjectItem {...item} />
              <ProjectItem {...item} />
              <ProjectItem {...item} />
              <ProjectItem {...item} />

            </VStack>
          </VStack>
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
          <ModalHeader fontSize="24px" color="#666"  >Create New Project</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody pb={6}>
            <FormControl>
              <Flex>
                <Input type="email" onChange={e => (e.target.value)} ref={initialRef} placeholder='Enter Email Address' fontSize="12px" bg="white" borderRadius="none" />
                <Input type="email" onChange={e => (e.target.value)} ref={initialRef} placeholder='Enter Email Address' fontSize="12px" bg="white" borderRadius="none" />
              </Flex>
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
            <Button onClick={() => { }} _hover={{ background: "blue" }} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Projects;