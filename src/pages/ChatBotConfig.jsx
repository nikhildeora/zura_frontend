import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Text,
  Grid,
  GridItem,
  HStack,
  Switch, 
  Select,
  Avatar
} from "@chakra-ui/react";
import BreadCrumbNav from "../components/BreadCrumbNav";
import SideBarNav from "../components/SideBarNav";
import { useParams } from "react-router-dom";

const ChatBotConfig = () => {
  const { project_id } = useParams();

  return (
    <Box>
      <SideBarNav project_id={project_id} />
      <Box p={7} ml={{ base: "full", md: 80 }}>
        <BreadCrumbNav
          project_id={project_id}
          currentPage={"Widget Configuration"}
          notSettingPage={true}
        />
        <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
          Configuration
        </Heading>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Display</Tab>
            <Tab>Advance</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <form>
                <FormControl>
                  <FormLabel>Chatbot Name</FormLabel>
                  <Input borderColor={"gray.800"} />
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel>Welcome Message</FormLabel>
                  <Input borderColor={"gray.800"} />
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel>Input Placeholder</FormLabel>
                  <Input borderColor={"gray.800"} />
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
              </form>
            </TabPanel>
            <TabPanel>
              <Grid
                mb={"1.5rem"}
                gridTemplateColumns={"repeat(2,1fr)"}
                columnGap={"3rem"}
              >
                <GridItem>
                  <FormControl mt={3}>
                    <FormLabel>Primary Color</FormLabel>
                    <HStack>
                    <Input borderColor={"gray.800"} />
                    <Box bg={"green"} borderRadius={"8px"} border={"1px solid black"} h={"2.5rem"} w={"2.5rem"}></Box>
                    </HStack>
                    <Text
                      textAlign={"left"}
                      fontSize={"0.8rem"}
                      color={"gray.500"}
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Text>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl mt={3}>
                    <FormLabel>Font Color</FormLabel>
                    <HStack>
                    <Input borderColor={"gray.800"} />
                    <Box bg={"black"} borderRadius={"8px"} border={"1px solid black"} h={"2.5rem"} w={"2.5rem"}></Box>
                    </HStack>
                    <Text
                      textAlign={"left"}
                      fontSize={"0.8rem"}
                      color={"gray.500"}
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Text>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl mt={3}>
                    <FormLabel>Font Size (in px)</FormLabel>
                    <Input borderColor={"gray.800"} />
                    <Text
                      textAlign={"left"}
                      fontSize={"0.8rem"}
                      color={"gray.500"}
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Text>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl mt={3}>
                    <FormLabel>Chat Height (in % of total screen)</FormLabel>
                    <Input borderColor={"gray.800"} />
                    <Text
                      textAlign={"left"}
                      fontSize={"0.8rem"}
                      color={"gray.500"}
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Text>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl mt={3}>
                    <HStack justifyContent={"space-between"}>
                    <div>  
                    <FormLabel>Show Sources</FormLabel>
                    <Text
                      textAlign={"left"}
                      fontSize={"0.8rem"}
                      color={"gray.500"}
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Text>
                    </div>
                    <Switch id='email-alerts' isChecked={true}/>
                    </HStack>
                  </FormControl>
                </GridItem>
              </Grid>
              <hr />
              <Text
                display={"block"}
                mt={"1.5rem"}
                textAlign={"left"}
                as={"b"}
                color={"var(--primary-color)"}
              >
                Chat Icon
              </Text>
              <Grid
                mb={"1.5rem"}
                gridTemplateColumns={"repeat(2,1fr)"}
                columnGap={"3rem"}
              >
                <FormControl mt={3}>
                  <FormLabel>Chat Icon Size</FormLabel>
                  <Select borderColor={"gray.800"}>
                  <option value="small">small</option>
                    <option value="large">large</option>
                    <option value="extra large">extra large</option>
                    
                  </Select>
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel>Position on Screen</FormLabel>
                  <Select borderColor={"gray.800"}>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  </Select>
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel>Distance from Bottom (in px)</FormLabel>
                  <Input borderColor={"gray.800"} />
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel>Horizontal Distance (in px)</FormLabel>
                  <Input borderColor={"gray.800"} />
                  <Text
                    textAlign={"left"}
                    fontSize={"0.8rem"}
                    color={"gray.500"}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </FormControl>
                <FormControl mt={3}>
                  <Text display={"block"} textAlign={"left"} as={"b"}>Bot Icon</Text>
                  <HStack alignItems={"center"}mt={"5px"}>
                  <Avatar></Avatar>
                  <FormLabel 
                  p={1}
                  bg={"var(--primary-color)"}
                  color={"white"}
                  borderRadius={"8px"}
                  transition={"all 0.5s"}
                  _hover={{
                    bg : "var(--primary-color-light)"
                  }}
                  border={"1px solid black"} htmlFor="choose_icon">Upload Image</FormLabel>
                  <Input id="choose_icon" display={"none"} type="file" accept="image/*" borderColor={"gray.800"} />
                  </HStack>
                </FormControl>
              </Grid>
            </TabPanel>
            <TabPanel>Advance</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ChatBotConfig;
