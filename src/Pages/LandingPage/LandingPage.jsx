
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
  Grid,
  Divider,
} from '@chakra-ui/react';

import { Link as ReachLink, useNavigate } from 'react-router-dom';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {BiTargetLock} from "react-icons/bi"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {AiOutlineDollarCircle,AiFillLinkedin,AiFillFacebook} from "react-icons/ai"
import {RiTeamLine} from "react-icons/ri"
import { BsClockHistory,BsGlobe } from "react-icons/bs"
import {GiCheckMark} from "react-icons/gi"

import React from 'react'
import NavbarLanding from '../../Components/NavbarLanding/NavbarLanding'
import styles from "./LandingPage.module.css"
import ReactPlayer from "react-player"
import Footer from '../../Components/Footer/Footer';


const LandingPage = () => {
  const navigate=useNavigate()
  
  return (
    <div id={styles.whole}>
      <div style={{
        width:"80%",
        margin:"auto",
        paddingTop:"10px"
      }} >
        <NavbarLanding/>
      </div>

      <div>
       <h1 id={styles.heading}>
        The most popular free 
        <span style={{color:"#03A9F4" }}> time tracker </span>
        for teams
       </h1>
       <p id={styles.headingContent} >Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.</p>
      </div>

      <div className={styles.smallRating}> 
        <div>
          <img src="https://clockify.me/assets/images/stars-small.svg" alt="" />
        </div>
        <div>
        <p>4,000+ Reviews</p> 
        </div>     
      </div>

      <div>
          <button onClick={()=>navigate('/signup')} id={styles.itsFree}>
            start tracking time-it's free!
          </button>
          <div className={styles.belowButton}>
            <div>
            <img src="https://clockify.me/assets/images/signed-up-icon.svg" alt="" />

            </div>
            <div>
            <p>146,072 people signed up last month</p>
            </div>
          </div>
      </div>

      <Stack marginTop={8} >
        <Image w={'80%'} m={'auto'} src='https://clockify.me/assets/images/customers-light-gray-3.svg' />
      </Stack>

      <Stack w={'80%'} m={'auto'} mt={10} >
        {/* <Image src='https://clockify.me/assets/images/time-tracker-screenshot.svg'/> */}
        <ReactPlayer playing={true}
         light='https://clockify.me/assets/images/time-tracker-screenshot.svg' 
         src='https://clockify.me/assets/images/time-tracker-screenshot.svg'
         width={'auto'} height={'600px'} m={'auto'}
           controls url='https://youtu.be/NMZhFs_b0Aw'  />
      </Stack>


      <Stack mt={20}>
        <Text color='#3D4853' fontSize={'34px'} >
          Time management features
        </Text>
        <Text fontSize={'1.315rem'} textAlign={'center'} color={'#5A6B7B'}  >
        Track productivity, attendance, and billable hours with a <br /> simple time tracker and timesheet.
        </Text>
      </Stack>
      
      
      <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            TIMEKEEPING
          </Text>
          <Stack
            spacing={3}>
            <Feature
              text={'Timer'}
              smallText={'Track work hours in real time.'}
            />
            <Feature
              text={'Timesheet'}
              smallText={'Enter time in a weekly timesheet.'}
            />
            <Feature
              text={'Calender'}
              smallText={'Visually block out and manage time.'}
            />
             <Feature
              text={'Auto tracker'}
              smallText={'Visually block out and manage time.'}
            />
             <Feature
              text={'Kiosk'}
              smallText={'Clock in from a shared device.'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
          boxSize='400px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/feature-time-tracker-methods.svg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
          boxSize='400px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/feature-time-reporting-activity.svg'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            REPORTING
          </Text>
          <Stack
            spacing={3}>
            <Feature
              text={'Reports'}
              smallText={'Analyze and export tracked time.'}
            />
            <Feature
              text={'Activity'}
              smallText={'See who works on what.'}
            />
            <Feature
              text={'Rates'}
              smallText={'See earnings, cost, and profit.'}
            />
             <Feature
              text={'Progress'}
              smallText={'Track project estimates and budget.'}
            />
             <Feature
              text={'Location'}
              smallText={'See visited sites and routes.'}
            />
          </Stack>
        </Stack>
       
      </SimpleGrid>
    </Container>

    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            MANAGEMENT
          </Text>
          <Stack
            spacing={3}>
            <Feature
              text={'Scheduling'}
              smallText={'Schedule work, assignments, and shifts.'}
            />
            <Feature
              text={'Time off'}
              smallText={'Manage leaves and holidays.'}
            />
            <Feature
              text={'Approval'}
              smallText={'Submit and approve timesheets.'}
            />
             <Feature
              text={'Invoicing'}
              smallText={'Create invoices from billable time.'}
            />
             <Feature
              text={'Expenses'}
              smallText={'Record project expenses and fees.'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
          boxSize='400px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/feature-team-scheduling.svg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

    <Stack marginTop={'80px'}>
      <button
        onClick={()=>navigate("/features")}
      id={styles.featureBtn} >
              SEE ALL FEATURES
          </button>
    </Stack>

    <Text  marginTop={'150px'} color='#3D4853' fontSize={'34px'} >
      Time tracking apps
    </Text>
      <Text fontSize={'1.315rem'} textAlign={'center'} color={'#5A6B7B'}  >
        Clockify works across devices. Track time from anywhere — all <br /> data is synced online.
      </Text>
      
<Stack bgColor={'#F7FCFF'}>
    <Container maxW={'5xl'}  py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/time-tracking-app-desktop.png'
            }
            objectFit={'cover'}
          />
          <Text fontWeight={'bold'} color={'#3D4853'}>Desktop</Text>
          <Flex gap={5} align={'center'} justify={'center'}>
            <button onClick={()=>navigate("/window")} className={styles.imgBtn} >Windows</button>
            <button onClick={()=>navigate("/Mac")} className={styles.imgBtn} >Max</button>
            <button onClick={()=>navigate("/linux")} className={styles.imgBtn} >Linux</button>
          </Flex>
        </Stack>
        <Stack>
          <Image
          // boxSize='400px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/time-tracking-app-web.png'
            }
            objectFit={'cover'}
          />
           <Text fontWeight={'bold'} color={'#3D4853'}>Desktop</Text>
          <Flex gap={5} align={'center'} justify={'center'}>
            <button onClick={()=>navigate("/edge")} className={styles.imgBtn} >Edge</button>
            <button onClick={()=>navigate("/chrome")} className={styles.imgBtn} >Chrome</button>
            <button onClick={()=>navigate("/firefox")} className={styles.imgBtn} >FireFox</button>
          </Flex>
        </Stack>
        
      </SimpleGrid>
    </Container>
<Center>
    <Container bg={'#F7FCFF'} maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/time-tracking-app-mobile.png'
            }
            objectFit={'cover'}
          />
          <Text fontWeight={'bold'} color={'#3D4853'}>MOBILE APP</Text>
          <Flex gap={5} align={'center'} justify={'center'}>
            <button onClick={()=>navigate("/android")} className={styles.imgBtn} >Android</button>
            <button onClick={()=>navigate("/ios")} className={styles.imgBtn} >iOS</button>
          </Flex>
        </Stack>
        <Stack>
          <Image
          // boxSize='400px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/time-tracking-app-kiosk.png'
            }
            objectFit={'cover'}
          />
           <Text fontWeight={'bold'} color={'#3D4853'}>KIOSK APP</Text>
          <Flex gap={5} align={'center'} justify={'center'}>
            <button className={styles.imgBtn} >Any device</button>
          </Flex>
        </Stack>
        
      </SimpleGrid>
    </Container>
    </Center>
    </Stack>
    
   <Heading fontWeight={'normal'} marginTop={'150px'} marginBottom={'50px'} color={'#3D4853'} fontSize={'34px'} >Why track time with Clockify </Heading>
     
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>

            <SimpleGrid border={'1p solid red'} columns={{ base: 1, md: 2 }} spacing={10}>
             <Box className={styles.smallBoxes} >
                <Icon boxSize={12} color={'#03A9F4'} as={BiTargetLock}   />
                <Heading fontWeight={'normal'} fontSize={'22px'} color={'#3D4853'}>Boost productivity</Heading>
                <Text marginTop={'10px'} color={'#78909C'} fontSize={'1rem'} >
                Track time you spend on activities, see where <br /> your time goes, and  improve your time <br /> management skills.
                  </Text>
                  <Flex marginTop={'10px'}  color={'#03A9F4'}  gap={'1'} justify='left' align={'center'}>
                  <Text textAlign={'left'} > Learn more </Text>
                   <Icon marginTop={'5px'} as={HiOutlineArrowNarrowRight}/>
                  </Flex>
             </Box>

             <Box className={styles.smallBoxes} >
                <Icon boxSize={12} color={'#03A9F4'} as={AiOutlineDollarCircle}   />
                <Heading fontWeight={'normal'} fontSize={'22px'} color={'#3D4853'}>Bill clients</Heading>
                <Text marginTop={'10px'} color={'#78909C'} fontSize={'1rem'} >
                Track billable time and expenses, show clients <br /> how much you've worked, see how much you've <br /> earned, and create invoices.
                  </Text>
                  <Flex marginTop={'10px'}  color={'#03A9F4'}  gap={'1'} justify='left' align={'center'}>
                  <Text textAlign={'left'} > Learn more </Text>
                   <Icon marginTop={'5px'} as={HiOutlineArrowNarrowRight}/>
                  </Flex>
             </Box>

             <Box className={styles.smallBoxes} >
                <Icon boxSize={12} color={'#03A9F4'} as={RiTeamLine}   />
                <Heading fontWeight={'normal'} fontSize={'22px'} color={'#3D4853'}>Manage Team</Heading>
                <Text marginTop={'10px'} color={'#78909C'} fontSize={'1rem'} >
                Track attendance for payroll and accounting, see <br /> who works on what, and manage workload <br /> among teams.
                  </Text>
                  <Flex marginTop={'10px'}  color={'#03A9F4'}  gap={'1'} justify='left' align={'center'}>
                  <Text textAlign={'left'} > Learn more </Text>
                   <Icon marginTop={'5px'} as={HiOutlineArrowNarrowRight}/>
                  </Flex>
             </Box>

             <Box className={styles.smallBoxes} >
                <Icon boxSize={12} color={'#03A9F4'} as={BsClockHistory}   />
                <Heading fontWeight={'normal'} fontSize={'22px'} color={'#3D4853'}>Boost productivity</Heading>
                <Text marginTop={'10px'} color={'#78909C'} fontSize={'1rem'} >
                Track time and analyze your company's <br /> efficiency across projects, clients, departments, <br /> and employees.
                  </Text>
                  <Flex marginTop={'10px'}  color={'#03A9F4'}  gap={'1'} justify='left' align={'center'}>
                  <Text textAlign={'left'} > Learn more </Text>
                   <Icon marginTop={'5px'} as={HiOutlineArrowNarrowRight}/>
                  </Flex>
             </Box>
             
            </SimpleGrid>
      </Container>
    

    <Stack mb={'150px'}>
    {/* <SimpleGrid columns={{ base: 1, md: 2 }} >  */}
      <Text  color={' #78909C'} fontSize={'12px'} >MORE USE CASES</Text>
      <Center>
      <Flex> 
      <Grid
        templateColumns={{
          base: 'repeat(1, 190px)',
          sm: 'repeat(2, 190px)',
          md: 'repeat(6, auto)',
        }}>
        <Box className={styles.smallTexts} >Time Clock</Box>
        <Box className={styles.smallTexts} >Work Hours Tracker</Box>
        <Box className={styles.smallTexts} >Employee Time Tracker</Box>
        <Box className={styles.smallTexts} >Attendance Tracker</Box>
        <Box className={styles.smallTexts} >Task Timer</Box>
        <Box className={styles.smallTexts} >Time Card Calculator</Box>
        </Grid>
      </Flex>
      </Center>
      {/* </SimpleGrid> */}
    </Stack>

    <Stack bgColor={'#F7FCFF'} >
      <Center>
    <Container  align={'center'}    margin={'auto'} maxW={'4xl'} py={12}>
      <SimpleGrid textAlign={'center'} columns={{ base: 1, md: 2, sm:1 }} spacing={3}>
      <Flex b >
          <Image
          // w={'auto'}
          
          margin={'auto'}
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://clockify.me/assets/images/free-forever-clock-4.svg'
            }
            objectFit={'cover'}
          />
        </Flex>

        <Stack pl={10}   textAlign={'left'}  pt={20} spacing={1}>
        <Text mb={'-25px'} fontSize={'72px'} fontWeight={'bold'} color={'#03A9F4;'} >FREE</Text>
        <Text  fontSize={'36px'} fontWeight={'bold'} color={'#03A9F4'}>FOREVER!</Text>
        <Box>
          <Text><Icon color={'#03A9F4;'} as={GiCheckMark}/> <span style={{color:"#5A6B7B", fontSize:"18px"}} >Unlimited users</span></Text>
          <Text><Icon color={'#03A9F4;'} as={GiCheckMark}/> <span style={{color:"#5A6B7B", fontSize:"18px"}} >Unlimited tracking</span></Text>
          <Text><Icon color={'#03A9F4;'} as={GiCheckMark}/> <span style={{color:"#5A6B7B", fontSize:"18px"}} >Unlimited projects</span></Text>
        </Box>
        <Box>
        <Flex cursor={'pointer'} marginTop={'10px'}  color={'#03A9F4'}  gap={'1'} justify='left' align={'center'}>
                  <Text textAlign={'left'} >Upgrade</Text>
                   <Icon marginTop={'5px'} as={HiOutlineArrowNarrowRight}/>
                  </Flex>
        </Box>
        </Stack>
       
      </SimpleGrid>
    </Container>
    </Center>
    </Stack>

    <Box as={Container} maxW="7xl" mt={14} p={4}>

      <Stack mb={20}>
        <Text color={'#78909C'} fontSize={'12px'} >#1 SUPPORT IN SOFTWARE</Text>
        <Heading fontWeight={'normal'} color={'#3D4853'} fontSize={'34px'} >World-class customer support</Heading>
        <Heading fontWeight={'normal'} fontSize={'1.315rem'} color={'#5A6B7B'}>We're here 24 hours a day, every day of the week, including holidays.</Heading>
      </Stack>
     
      {/* <Divider mt={12} mb={12} /> */}
      <Center>
      <Grid
        templateColumns={{
          base: 'repeat(1, 250px)',
          sm: 'repeat(2, 200px)',
          md: 'repeat(4, 150px)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
     <Flex >
      <Image boxSize={7}  src='https://clockify.me/assets/images/support-phone.svg'  />

        <Box mt={'-8px'} ml={'5px'} textAlign={'left'} display={'block'} maxW={'135px'} color={'#78909C'} fontSize={'14px'} >
          <Box fontSize={'28px'} color={'#3D4853'}>24/7</Box>
          <Box mt={'-10px'} >support anytime, anywhere</Box>
        </Box>
     </Flex>

     <Flex >
      <Image boxSize={7}  src='https://clockify.me/assets/images/support-mail.svg'  />

        <Box mt={'-8px'} ml={'5px'} textAlign={'left'} display={'block'} maxW={'135px'} color={'#78909C'} fontSize={'14px'} >
          <Box fontSize={'28px'} color={'#3D4853'}>1h</Box>
          <Box mt={'-10px'} >average response time</Box>
        </Box>
     </Flex>
     
     <Flex >
      <Image boxSize={7}  src='https://clockify.me/assets/images/support-heart.svg'  />

        <Box mt={'-8px'} ml={'5px'} textAlign={'left'} display={'block'} maxW={'135px'} color={'#78909C'} fontSize={'14px'} >
          <Box fontSize={'28px'} color={'#3D4853'}>95%</Box>
          <Box mt={'-10px'} >satisfaction score (12k+ ratings)</Box>
        </Box>
     </Flex>

     <Flex >
      <Image boxSize={7}  src='https://clockify.me/assets/images/support-uptime.svg'  />

        <Box mt={'-8px'} ml={'5px'} textAlign={'left'} display={'block'} maxW={'135px'} color={'#78909C'} fontSize={'14px'} >
          <Box fontSize={'28px'} color={'#3D4853'}>99.99%</Box>
          <Box mt={'-10px'} >highest uptime levels</Box>
        </Box>
     </Flex>

      </Grid>
      </Center>
    </Box>

    
    <Center>
      <Stack>
        <button className={styles.imgBtn} style={{width:"170px",marginBottom:"-1px" }} >Contact us</button>
        <Text color={'#78909C'} fontSize={'12px'} >EMAIL • PHONE • CHAT</Text>
      </Stack>
    </Center>


    <Divider mt={59} mb={50}  />

<Stack pt={'100px'} pb={'100px'} bg={'#F7FCFF'}>
<Center >
    <Stack  textAlign={'center'}>
      <Heading mb={4} fontWeight={'normal'} color={'#3D4853'} fontSize={'34px'} >Start tracking time with Clockify</Heading>
      <Flex  marginLeft={'auto'} marginRight={'auto'} align={'center'} justify={'space-between'} maxW={'450px'}  fontSize={'15px'} color={'#5A6B7B'} >
        <Box>24/7 Support</Box>
        <Box>•</Box>
        <Box>Cancel Anytime</Box>
        <Box>•</Box>
        <Box>Free Forever</Box>
        
        {/* 24/7 Support • Cancel Anytime • Free Forever  */}
        </Flex>
    </Stack>
    </Center>

    <div style={{
      marginTop:"20px",backgroundColor:"#F7FCFF"
    }} >
          <button onClick={()=>navigate('/signup')} id={styles.itsFree}>
            CREATE FREE ACCOUNT
          </button>
          <div className={styles.belowButton}>
            <div>
            <img src="https://clockify.me/assets/images/signed-up-icon.svg" alt="" />

            </div>
            <div>
            <p>146,072 people signed up last month</p>
            </div>
          </div>
      </div>
      </Stack>

      


      <Stack mb={'40px'} >
        <Footer />
      </Stack>


    
    </div>
  )
}

export default LandingPage




const Feature = ({ text, smallText }) => {
  return (
    <Stack gap={0} align={'flex-start'}>
      <Text cursor={'pointer'} _hover={{color:'#03A9F4'}} marginBottom={'-10px'} fontWeight={'bold'} fontSize={'16px'} color={'#3D4853'} >{text}</Text>
      <Text  color={'#78909C'} fontSize={'14px'} >{smallText}</Text>
    </Stack>
  );
};


