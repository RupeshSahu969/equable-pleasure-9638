import React from 'react'
import styles from "./Footer.module.css"
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Icon,
    useColorModeValue,
    Box,
    Center,
    chakra,
    Grid,
    Link,
    Divider,
  } from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {AiFillLinkedin,AiFillFacebook} from "react-icons/ai"
import { BsGlobe } from "react-icons/bs"


const Footer = () => {
    const navigate=useNavigate()
  return (
    <div>
    <Box mt={'80px'} >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack textAlign={'left'}  spacing={3}>
            <Box cursor={'pointer'} onClick={()=>navigate('/signup')}>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              <Image src='https://clockify.me/assets/images/clockify-logo.svg' />
            </Box>
            <Text m={'5px 0px'} maxW={'200px'} fontSize={'12px'} color={'#78909C'}>
            The world's leading time tracker and timesheet software for teams
            </Text>
            <Link to="/signup" color={'#5A6B7B'} fontSize={'13px'} _hover={{ textDecoration:"none", color:"#03A9F4" }} as={ReachLink}>
            SIGN UP FREE
            </Link>
            <Link color={'#5A6B7B'} fontSize={'13px'} _hover={{ textDecoration:"none", color:"#03A9F4" }} to="/login" as={ReachLink} >
            LOG IN
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Features</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Download</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Integrations</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Upgrade</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>API</Link>
          </Stack>
          <Stack  color={'#5A6B7B'} fontSize={'16px'}align={'flex-start'}>
            <ListHeader>solution</ListHeader>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
              Time Keeping
            <Image src="https://clockify.me/assets/images/dropdown-arrow.svg" />
            </Flex>
             </Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
              Managment
              <Image src="https://clockify.me/assets/images/dropdown-arrow.svg" />
            </Flex>  </Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
              Reporting
            <Image src="https://clockify.me/assets/images/dropdown-arrow.svg" />
            </Flex></Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
              Buisness
              <Image src="https://clockify.me/assets/images/dropdown-arrow.svg" />
            </Flex>  </Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
              Calculators
            <Image src="https://clockify.me/assets/images/dropdown-arrow.svg" />
            </Flex></Link>
           
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>company</ListHeader>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>About us</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Customers</Link>
            <Text  color={'#5A6B7B'} fontSize={'11px'} fontWeight={'bold'} href={'#'}>WE ALSO MAKE</Text>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
            <Image src="https://clockify.me/assets/images/pumble-icon-color.svg" />
              Pumble
            </Flex>
             </Link>
             <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>
              <Flex gap={1}>
            <Image src="https://clockify.me/assets/images/plaky-icon-color.svg" />
              Plaky
            </Flex>
             </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Help</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Tutorials</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Resources</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Blog</Link>
            <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} color={'#5A6B7B'} fontSize={'16px'} href={'#'}>Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>


    <Box mb={'-15px'} >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack color={'#7F9CAD'} fontSize={'14px'} direction={'row'} spacing={6}>
          <Link _hover={{ textDecoration:"none" }} href={'#'}>©2022 Clockify</Link>
          <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} href={'#'}>Sitemap</Link>
          <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} href={'#'}>Cookies</Link>
          <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} href={'#'}>Terms</Link>
          <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} href={'#'}>Privacy</Link>
          <Link _hover={{ textDecoration:"none", color:"#03A9F4" }} href={'#'}>Security</Link>
        </Stack>


        <Stack color={'#7F9CAD'} direction={'row'} spacing={0}>
          <SocialButton href={'https://twitter.com/Clockify'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton  href={'https://www.facebook.com/clockify.me'}>
            <AiFillFacebook />
          </SocialButton>
          <SocialButton  href={'https://www.instagram.com/clockify.me/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton  href={'https://www.youtube.com/clockify?sub_confirmation=1'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton  href={'https://www.linkedin.com/company/clockify/'}>
            <AiFillLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
 

    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack color={'#7F9CAD'} fontSize={'12px'} direction={'row'} spacing={6}>
          <Text>COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA, +1-855-738-8741</Text>
        </Stack>
        <Stack color={'#7F9CAD'} direction={'row'} spacing={0}>
          
      
          {/* <SocialButton   href={'https://twitter.com/Clockify'}> */}
            <Flex gap={1} fontSize={'10px'} align={'center'} >
            <BsGlobe fontSize={'14px'} />
              ENGLISH
            </Flex>

          {/* </SocialButton> */}
          English
        </Stack>
      </Container>
    </Box>  

    </div>
  )
}

export default Footer




  
  const ListHeader = ({ children }) => {
    return (
      <Text textTransform={'uppercase'} fontWeight={'bold'} color={'#5a6b7b'} fontSize={'0.9rem'} mb={2}>
        {children}
      </Text>
    );
  };
  
  
  
  
  const SocialButton = ({
    children,
    href,
  }) => {
    return (
      <chakra.button
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        target={'_blank'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        
        {children}
      </chakra.button>
    );
  };
  
  
      