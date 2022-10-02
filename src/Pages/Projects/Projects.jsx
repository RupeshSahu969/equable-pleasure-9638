import { Box, Button, Center, Divider, Flex, FormControl, Grid, GridItem, HStack, Input, Menu, MenuButton, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectItem from "./Components/ProjectItem";

const Projects = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectArr, setArr] = useState([]);

  const initState = {
    name: "",
    access: false,
    color: "#5cc7f8",
    tracked: "0 hrs",
    client: ["MPL"],
    amount: "4000 $",
  }
  const [newProj, setProj] = useState(initState)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  console.log(newProj)
  const handleAddProj = (e) => {

    setArr([...projectArr, newProj]);
    setProj(initState);
  }
  return (



    <>
      <Box bg="#f2f6f8" p="5% 2%" w="100%" h="100vh" >
        <VStack>
          <Stack w="100%" p={"1% 0"} direction={{ base: "column", sm: "row" }} >
            <Center>
              <Text fontWeight={"semibold"} color={"#666"} size={"md"} >Projects</Text>
            </Center>
            <Spacer />
            <Button _hover={{ background: "#48b6e8" }} borderRadius="2px" onClick={onOpen} color="white" bg='#5cc7f8' mr={3} >CREATE NEW PROJECT</Button>
          </Stack>

          <VStack fontSize="12px" mt="20px" w="100%" spacing="none" >
            <Flex p="1rem" w="100%" h="50px" bg="#e4eaee" justifyContent="flex-start" alignItems="center" >
              <Text fontSize="12" >Projects</Text>
            </Flex>
            <VStack spacing="none" w="100%"  >
              {
                projectArr.map((el) => {
                  return <ProjectItem key={el.name} {...el} />
                })
              }

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
                <Input type="text" name="name" onChange={e => setProj({ ...newProj, name: e.target.value })} ref={initialRef} placeholder='Enter Project Name' fontSize="12px" bg="white" borderRadius="none" />
              </Flex>
            </FormControl>

            <FormControl mt={4}>
              <HStack >
                <Menu >
                  <MenuButton p="10px" fontSize="12px" >Select Color</MenuButton>
                  <MenuList bg="none" border="none" >
                    <Grid bg="white" boxShadow="md" w="min-content" p="10px" templateColumns='repeat(5, 1fr)' gap={"10px"}>
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#f44336' })} bg='#f44336' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#e91e63' })} bg='#e91e63' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#ff5722' })} bg='#ff5722' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#ff9800' })} bg='#ff9800' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#ffc107' })} bg='#ffc107' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#8bc34a' })} bg='#8bc34a' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#4caf50' })} bg='#4caf50' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#00bcd4' })} bg='#00bcd4' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#009688' })} bg='#009688' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#03a9f4' })} bg='#03a9f4' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#3f51b5' })} bg='#3f51b5' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#673ab7' })} bg='#673ab7' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#9c27b0' })} bg='#9c27b0' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#607d8b' })} bg='#607d8b' />
                      <GridItem cursor="pointer" borderRadius="3px" w='20px' h='20px' onClick={() => setProj({ ...newProj, color: '#795548' })} bg='#795548' />
                    </Grid>
                  </MenuList>
                </Menu>
                <Spacer />
                <Flex>
                  <Center>
                    <input onChange={() => { }} type="checkbox" />
                  </Center>
                  <Center>
                    <Text fontSize="14px" ml="8px" >Public</Text>
                  </Center>
                </Flex>
              </HStack>
            </FormControl>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Spacer />
            <Button _hover={{ background: "white" }} fontWeight="medium" variant="ghost" color="#5cc7f8" onClick={onClose}>Cancel</Button>
            <Button onClick={handleAddProj} _hover={{ background: "blue" }} borderRadius="2px" color="white" bg='#5cc7f8' mr={3}>
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Projects;