import React from 'react'
 

  import { GiHamburgerMenu } from "react-icons/gi"
  import { AiOutlineClose } from "react-icons/ai"
  import { Link as ReachLink, useNavigate } from 'react-router-dom';
  
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';


const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'https://react-icons.github.io/react-icons/search?q=close'}>
//     {children}
//   </Link>
// );

export default function NavbarLanding() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  return (
    <>
      <Box border={'1px solid red'}  padding={'20px 80px'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            paddingLeft={'3'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Link as={ReachLink} to='/' >
                    <Image src='https://clockify.me/assets/images/clockify-logo.svg'/>
                </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box>
                <Link as={ReachLink} to='/login' >
                    FEATURES
                </Link>
              </Box>
              <Box>
              <Link as={ReachLink} to='/login' >
                    DOWNLOAD
                </Link>
              </Box>
             
              
            </HStack>
          </HStack>
          <HStack>
          <Flex alignItems={'center'} justifyItems={'right'} gap={10}>
            <Menu>
              <Link as={ReachLink} to='/login' >
                LOG IN
              </Link>
              <button onClick={()=>navigate('/signup')} to={'/signup'} style={{backgroundColor:'transparent', border:'1px solid #03A9F4' ,width:"140px", height:'40px'}} >
                SIGN UP FREE
              </button>
            </Menu>
          </Flex>
            </HStack>    
        </Flex>

        {isOpen ? (
          <Box pb={5} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}