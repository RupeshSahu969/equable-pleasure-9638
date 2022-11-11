import { FcGoogle } from 'react-icons/fc';
import styles from "./SignUpPage.module.css"
import { Link as ReachLink, useNavigate } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
  Divider,
  Center,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Icon } from '@chakra-ui/react'
import { saveData } from '../../Components/utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth, providers } from '../../Components/utils/Firebase';
import { authFun } from '../../Components/Redux/action';
import { signInWithPopup } from 'firebase/auth';
// import { SignInWithGoogle } from '../../Components/utils/Firebase';


export default function SignUpPage() {
  const [formEmail, setformEmail] = useState("")
  const [formPassword, setformPassword] = useState('')
  const navigate = useNavigate()
  const toast = useToast()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)


  const [showPassword, setShowPassword] = useState(false);



  const handleSignin = (e) => {
    e.preventDefault()
    // console.log(formEmail, formPassword)
    saveData("email", formEmail)
    saveData("password", formPassword)
    toast({
      position: 'bottom-right',
      status: 'success',
      description: "SignUp Success",
      isClosable: true,
    })
    setformPassword('')
    setformEmail('')
    navigate('/login')
  }

  const handleSubmitGoogle = () => {
    // const authing = isAuth 
    signInWithPopup(isAuth, providers)
      .then((result) => {
        console.log(result._tokenResponse)
        console.log(result._tokenResponse.email)
        console.log(result._tokenResponse.firstName)
        console.log(result._tokenResponse.photoUrl)
        dispatch(authFun(!auth))


      })
      .catch((error) => {
        console.log(error);

      });
  }


  return (
    <Stack bg={"#f2f6f8"}>
      <Stack

        w={'100%'}
        margin={'auto'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}

      // border={'1px solid red'}
      >
        {/* <Flex py={6} px={12} w={'full'} gap={20} justify={'space-between'}>
       <Stack>
        <Link as={ReachLink} to="/">
        <Image src="https://app.clockify.me/assets/logo.svg" alt="" />
        
        </Link>
       </Stack>
       <Stack>
         <Link color={'#03a9f4'} _hover={'textDecoration:none '} as={ReachLink} to='/Login'> Log In </Link>
       </Stack>
      </Flex> */}

        {/* <Box px={4}> */}
        <Flex mt={8} w={'full'} h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> <Link as={ReachLink} to="/">
            <Image src="https://app.clockify.me/assets/logo.svg" alt="" />

          </Link></Box>

          <Flex alignItems={'center'}>
            <Link color={'#03a9f4'} _hover={'textDecoration:none '} as={ReachLink} to='/Login'> Log In </Link>
          </Flex>
        </Flex>
        {/* </Box> */}


        <Stack align={'center'} spacing={8} mx={'auto'} maxW={'auto'} py={12} px={6}>



          <Stack align={'center'}>
            <h1 id={styles.heading} >
              Get started with Clockify
            </h1>
            <Text as={'p'} fontSize={'1.25rem'} color={'#666'}>
              Create a free account to start tracking time and supercharge your productivity.
            </Text>
            <Text color={'#999'} fontSize={'.8571rem'}>
              No credit card required
              <span>.</span>
              Unsubscribe at any tine
            </Text>
          </Stack>
          <Box w={'360px'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>

            {/* <Stack spacing={4}> */}
            <form action="" onSubmit={handleSignin}>
              <Stack spacing={4}>

                <Text id={styles.formHead} >Log In</Text>
                <FormControl id="email" isRequired>
                  {/* <FormLabel>Email address</FormLabel> */}
                  <Input name='email' value={formEmail} onChange={(e) => setformEmail(e.target.value)} placeholder='Enter email' type="email" />
                </FormControl>

                <FormControl id="password" isRequired>
                  <InputGroup>
                    <Input name='password' value={formPassword} onChange={(e) => setformPassword(e.target.value)} placeholder='Enter password' type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        // variant={'ghost'}

                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <Icon as={AiOutlineEye} /> : <Icon as={AiOutlineEyeInvisible} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack spacing={10}>
                  <Stack

                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                    alignItems={'center'}>
                    <Checkbox fontSize={'14px'} >I agree to the Terms of Use</Checkbox>
                  </Stack>
                </Stack>
                <Stack spacing={10} pt={2}>
                  <Input
                    disabled={formEmail === "" || formPassword === ""}
                    cursor={'pointer'} _hover={{
                      bg: 'blue.500',
                    }} color={'#fff'} bg={'#03a9f4'} value={'CREATE FREE ACCOUNT'} type='submit' />

                </Stack>
              </Stack>

            </form>
            <Stack spacing={4} >
              <Flex justify={'center'} align={'center'} gap={3} pt={2}>
                <Divider bg={'#C6D2D9'} />
                <span color='#333' >OR</span>
                <Divider bg={'#C6D2D9'} />
              </Flex>

              <Stack>
                <Button onClick={handleSubmitGoogle} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Stack>
            </Stack>

          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}






