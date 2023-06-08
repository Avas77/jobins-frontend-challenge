import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DoubleCircle from "../DoubleCircle";

const UserInfo = () => {
  return (
    <Flex
      pt="5.7rem"
      pl="3.9rem"
      pr="10.1rem"
      pb="3.8rem"
      flex="0 1 30%"
      align="center"
    >
      <DoubleCircle />
      <Stack ml="1.5rem">
        <Text fontSize="1.8rem" fontWeight={600}>
          Robert Fox
        </Text>
        <Text fontSize="1.5rem" color="#8B909A" fontWeight={400}>
          robert@gmail.com
        </Text>
      </Stack>
    </Flex>
  );
};

export default UserInfo;
