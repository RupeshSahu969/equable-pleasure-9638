import React from 'react'


import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Link as ReachLink, useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import styles from "./NavbarLanding.module.css"



export default function NavbarLanding() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  return (
    <>
      <Box  id={styles.whole}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            paddingLeft={'3'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={'center'}>
            <Box>
                <Link as={ReachLink} to='/' >
                    <Image src='https://clockify.me/assets/images/clockify-logo.svg'/>
                </Link>
            </Box>
            
            <HStack
            
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              <Box>
                <Link fontSize={'14px'} color={'#5A6B7B'} _hover={{textDecoration:"none",color:'#03A9F4'}} as={ReachLink} to='/features' >
                    FEATURES
                </Link>
              </Box>
              <Box>
              <Link fontSize={'14px'} color={'#5A6B7B'} _hover={{textDecoration:"none",color:'#03A9F4'}} as={ReachLink} to='/downloding' >
                    DOWNLOAD
                </Link>
              </Box>
                         
              
            </HStack>
            
          </HStack>
          <Box>
          <Flex justify={'right'} align={'center'}  gap={10}>
              <Link id={styles.links} as={ReachLink} to='/login' >
                LOG IN
              </Link>
              <button  onClick={()=>navigate('/signup')} id={styles.signup}>
                SIGN UP FREE
              </button>
          </Flex>
            </Box>
           
        </Flex>

        {isOpen ? (
          <Box pb={5} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
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
              <Box>
              <Link id={styles.links} as={ReachLink} to='/login' >
                LOG IN
              </Link>
              </Box>
              <Box>
              <button onClick={()=>navigate('/signup')} id={styles.signup}>
                SIGN UP FREE
              </button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}