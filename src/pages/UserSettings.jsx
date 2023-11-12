import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BreadCrumbNav from "../components/BreadCrumbNav";
import { useSelector } from "react-redux";

const UserSettings = ({ project_id }) => {
  const { current_user } = useSelector((store) => store);
  console.log("current_us", current_user);

  return (
    <Box p={7}>
      <BreadCrumbNav
        project_id={project_id}
        currentPage={"Account Settings"}
        notSettingPage={false}
      />
      <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
        Account Settings
      </Heading>
      <Flex 
        justifyContent={"center"}
        alignItems={"center"}
        gap={"3rem"}
      >
        <Avatar
          size={{ base: "lg", sm: "xl", md: "2xl" }}
        ></Avatar>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            border={"1px solid black"}
            placeholder="Enter your email to Login"
            value={current_user?.user_email}
            required={true}
            isReadOnly={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
           border={"1px solid black"}
            type="email"
            placeholder="Enter your email to Login"
            value={current_user?.user_email}
            required={true}
            isReadOnly={true}
          />
        </FormControl>
      </Flex>
      <Heading color={"var(--primary-color)"} my={7} textAlign={"left"}>
        Subscriptions
      </Heading>
      <Flex
        justifyContent={"space-between"}
        bgColor={"var(--primary-color)"}
        py={5}
        px={7}
        borderRadius={"12px"}
      >
        <Text alignSelf={"center"} color={"white"} fontSize={"1.3rem"}>
          You are currently on the Ques AI Basic Plan
        </Text>
        <Button color={"var(--primary-color)"}>Upgrade</Button>
      </Flex>
      <Text
        display={"block"}
        textAlign={"left"}
        mt={"12px"}
        color={"red"}
        as={"u"}
      >
        Cancel Subscription
      </Text>
    </Box>
  );
};

export default UserSettings;
