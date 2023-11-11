import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";

export default function CreateProjectButton() {
  return (
    <Button
      px={8}
      bg={"black"}
      color={"white"}
      fontSize={{ base: "0.7rem", sm: "1rem", lg: "1.4rem" }}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
    >
      <HStack spacing={3}>
        <AiFillPlusCircle />
        <Text>Create New Project</Text>
      </HStack>
    </Button>
  );
}
