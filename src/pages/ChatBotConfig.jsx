import React from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Heading, FormControl, Input, FormLabel, Text } from "@chakra-ui/react";
import BreadCrumbNav from "../components/BreadCrumbNav";

const ChatBotConfig = ({ project_id }) => {
  return (
    <Box p={7}>
      <BreadCrumbNav
        project_id={project_id}
        currentPage={"Widget Configuration"}
        notSettingPage={true}
      />
      <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
        Configuration
      </Heading>
    <Tabs >
      <TabList>
        <Tab>General</Tab>
        <Tab>Display</Tab>
        <Tab>Advance</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
           <form >
              <FormControl>
                 <FormLabel>Chatbot Name</FormLabel>
                 <Input borderColor={"gray.800"} />
                 <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>Lorem ipsum dolor sit amet consectetur.</Text>
              </FormControl>
              <FormControl mt={3}>
                 <FormLabel>Welcome Message</FormLabel>
                 <Input borderColor={"gray.800"} />
                 <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>Lorem ipsum dolor sit amet consectetur.</Text>
              </FormControl>
              <FormControl mt={3}>
                 <FormLabel>Input Placeholder</FormLabel>
                 <Input borderColor={"gray.800"} />
                 <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>Lorem ipsum dolor sit amet consectetur.</Text>
              </FormControl>
           </form>
        </TabPanel>
        <TabPanel>two</TabPanel>
        <TabPanel>Advance</TabPanel>
      </TabPanels>
    </Tabs>
    </Box>
  );
};

export default ChatBotConfig;
