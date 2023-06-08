import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";

const DoubleCircle = () => {
  return (
    <Flex>
      <Center
        width="7.2rem"
        height="7.2rem"
        backgroundColor="#7367F0"
        borderRadius="50%"
      >
        <Box
          width="5.8rem"
          height="5.8rem"
          backgroundColor="#B1AAF7"
          borderRadius="50%"
        />
      </Center>
    </Flex>
  );
};

export default DoubleCircle;
