import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo_icon from "../assets/logo_icon.png";
import logo_name from "../assets/logo_name.png";

const Logo = () => {
  return (
      <Flex
        alignItems={"center"}
        paddingLeft={4}
        paddingTop={2}
        position="relative"
        zIndex={-10}
      >
        <Image src={logo_icon} alt="Logo Icon" width={"2rem"} marginRight={1} />
        <Image src={logo_name} alt="Logo Icon" width={"4rem"} />
      </Flex>
  );
};

export default Logo;

