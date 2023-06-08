import {
  Flex,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ShippingAddress = () => {
  return (
    <Stack
      pt="2.4rem"
      pl="2.4rem"
      pb="3.8rem"
      pr="5.1rem"
      gap="2.6rem"
      flex="0 1 40%"
    >
      <Stack gap="1.6rem">
        <Text fontSize="1.3rem" fontWeight={500} color="#8B909A">
          SHIPPING ADDRESS
        </Text>
        <Text fontSize="1.3rem">
          3517 W. Gray St. Utica, Pennsylvania 57867
        </Text>
      </Stack>
      <Flex>
        <Stat>
          <StatNumber fontSize="2.4rem" fontWeight={700}>
            150
          </StatNumber>
          <StatHelpText
            color="#8B909A"
            fontSize="1.3rem"
            fontWeight={500}
            pt="0.8rem"
          >
            Total Order
          </StatHelpText>
        </Stat>
        <Stat>
          <StatNumber fontSize="2.4rem" fontWeight={700}>
            140
          </StatNumber>
          <StatHelpText
            color="#8B909A"
            fontSize="1.3rem"
            fontWeight={500}
            pt="0.8rem"
          >
            Completed
          </StatHelpText>
        </Stat>
        <Stat>
          <StatNumber fontSize="2.4rem" fontWeight={700}>
            10
          </StatNumber>
          <StatHelpText
            color="#8B909A"
            fontSize="1.3rem"
            fontWeight={500}
            pt="0.8rem"
          >
            Canceled
          </StatHelpText>
        </Stat>
      </Flex>
    </Stack>
  );
};

export default ShippingAddress;
