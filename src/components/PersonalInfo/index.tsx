import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const PersonalInfo = () => {
  return (
    <Stack pt="2.4rem" pl="2.3rem" pr="10.8rem" gap="1.6rem" flex="0 1 30%">
      <Text fontSize="1.3rem" fontWeight={500} color="#8B909A">
        PERSONAL INFORMATION
      </Text>
      <Flex gap="1.6rem">
        <Stack gap="1.5rem">
          <Text fontSize="1.3rem" fontWeight={400}>
            Contact Number
          </Text>
          <Text fontSize="1.3rem" fontWeight={400}>
            Date of Birth
          </Text>
          <Text fontSize="1.3rem" fontWeight={400}>
            Member Since
          </Text>
        </Stack>
        <Stack gap="1.5rem">
          <Text fontSize="1.3rem" fontWeight={600}>
            (201) 555-0124
          </Text>
          <Text fontSize="1.3rem" fontWeight={600}>
            1 Jan, 1985
          </Text>
          <Text fontSize="1.3rem" fontWeight={600}>
            3 March, 2023
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default PersonalInfo;
