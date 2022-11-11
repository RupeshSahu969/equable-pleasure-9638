import React from "react";
import styles from "./LoginPage.module.css";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// import { SignInWithGoogle } from '../../Components/utils/Firebase';

import {
  Flex,
  Box,
  FormControl,
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
} from "@chakra-ui/react";

import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

import { Image, useToast } from "@chakra-ui/react";
import { loadData } from "../../Components/utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { authFun } from "../../Components/Redux/action";
import { isAuth, providers } from "../../Components/utils/Firebase";
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formEmail, setformEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  const [check, setCheck] = useState(false);
  const toast = useToast();
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const localEmail = loadData("email");
    const localPassword = loadData("password");
    if (localEmail === formEmail && localPassword === formPassword) {
      setCheck(false);
      let str = localEmail;
      str = str.trim().split("");
      let name = "";
      if (str.includes(".") && str.indexOf(".") > str.indexOf("@")) {
        name = str.splice(0, str.indexOf("@"));
      } else {
        name = str.splice(0, str.indexOf("."));
      }
      name[0] = name[0].toUpperCase();
      name = name.join("");
      dispatch(authFun("tempToken", name, localEmail)).then(() => {
        navigate("/tracker");
      });
      toast({
        position: "bottom-right",
        status: "success",
        description: "Logged In Successfully",
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom-right",
        status: "error",
        description: "Error Loggin In",
        isClosable: true,
      });
      setCheck(true);
      // alert('Error')
    }
  };

  const handleSubmitGoogle = () => {
    // const authing = isAuth
    signInWithPopup(isAuth, providers)
      .then((result) => {
        // console.log(result._tokenResponse)
        // console.log(result._tokenResponse.email)
        // console.log(result._tokenResponse.firstName)
        // console.log(result._tokenResponse.photoUrl)
        dispatch(
          authFun(
            !auth,
            result._tokenResponse.firstName,
            result._tokenResponse.email
          )
        );
        navigate("/tracker");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack
      bg={"#f2f6f8"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      {/* <Stack> */}
      <Flex p={5} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"full"}>
          <Flex gap={20} justify={"space-between"}>
            <Stack>
              <Link as={ReachLink} to="/">
                <Image src="https://app.clockify.me/assets/logo.svg" alt="" />
              </Link>
            </Stack>
            <Stack>
              <Text color={"#999"} fontSize={"1rem"}>
                Don't have an account?{" "}
                <Link
                  color={"#03a9f4"}
                  _hover={"textDecoration:none "}
                  as={ReachLink}
                  to="/signup"
                >
                  {" "}
                  Sign up{" "}
                </Link>{" "}
              </Text>
            </Stack>
          </Flex>

          <Flex minH={"100vh"} justify={"center"} bg={"#f2f6f8"}>
            <Stack
              spacing={5}
              mx={"auto"}
              w={"380px"}
              maxW={"auto"}
              py={12}
              px={6}
            >
              <Box
                // rounded={'lg'}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <form action="" onSubmit={handleLogin}>
                  <Stack spacing={4}>
                    <Text id={styles.formHead}>Log In</Text>
                    <FormControl id="email" isRequired>
                      {/* <FormLabel>Email address</FormLabel> */}
                      <Input
                        value={formEmail}
                        onChange={(e) => setformEmail(e.target.value)}
                        placeholder="Enter email"
                        type="email"
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      {/* sd */}
                      <InputGroup>
                        <Input
                          value={formPassword}
                          onChange={(e) => setformPassword(e.target.value)}
                          placeholder="Enter password"
                          type={showPassword ? "text" : "password"}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? (
                              <Icon as={AiOutlineEye} />
                            ) : (
                              <Icon as={AiOutlineEyeInvisible} />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                        alignItems={"center"}
                      >
                        <Checkbox fontSize={"14px"}>Stay logged in</Checkbox>
                        <Link
                          fontWeight={500}
                          fontSize={"14px"}
                          color={"#03a9f4"}
                        >
                          Forgot password?
                        </Link>
                      </Stack>
                    </Stack>
                    <Stack spacing={10} pt={2}>
                      <Input
                        disabled={formEmail === "" || formPassword === ""}
                        cursor={"pointer"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        color={"#fff"}
                        borderRadius={"2px"}
                        bg={"#03a9f4"}
                        value={"LOG IN"}
                        type="submit"
                      />
                    </Stack>
                  </Stack>
                </form>

                <Stack spacing={4}>
                  <Flex justify={"center"} align={"center"} gap={3} pt={2}>
                    <Divider bg={"#C6D2D9"} />
                    <span color="#333">OR</span>
                    <Divider bg={"#C6D2D9"} />
                  </Flex>
                  <Stack>
                    <Button
                      onClick={handleSubmitGoogle}
                      w={"full"}
                      variant={"outline"}
                      leftIcon={<FcGoogle />}
                    >
                      <Center>
                        <Text>Sign in with Google</Text>
                      </Center>
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
      {/* </Stack> */}

      <Flex
        pt={10}
        flex={0.58}
        bg={"linear-gradient(180deg,#673ab7,#3f51b5,#00bcd4,#3f51b5)"}
      >
        {/* <Center> */}
        <Stack textAlign={"center"}>
          <Center>
            <div id={styles.newText}>NEW</div>
          </Center>
          <div id={styles.Text}>Scheduling</div>
          <div id={styles.para}>
            Visualize projects on a timeline and plan team's <br /> capacity
            (see who's busy and who's available).
          </div>
          <Center>
            <div id={styles.btnDiv}>
              <button>See how it works</button>
            </div>
          </Center>

          <div>
            <Image
              marginLeft={"8"}
              overflow={"inherit"}
              alt={"Login Image"}
              w={"490px"}
              h={"490px"}
              // objectFit={'cover'}
              src={
                "https://app.clockify.me/assets/features-info/scheduling-promo.webp"
              }
            />
          </div>
        </Stack>
        {/* </Center> */}
      </Flex>
    </Stack>
  );
}
