import React from "react";
import Board from "../Board";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import StatDetail from "../StatDetail";

const ProfitsBoard = () => {
  return (
    <Board pt="2.1rem" pl="2.4rem" pb="2.4rem" pr="6.1rem" flex="0 1 25%">
      <Flex pb="4.2rem">
        <Image src="/assets/yen.svg" />
        <Stack ml="2.4rem">
          <Text fontSize="1.8rem" fontWeight={600}>
            Total Profit
          </Text>
          <Text fontSize="1.4rem" fontWeight={500} color="#8B909A">
            Last 7 days
          </Text>
        </Stack>
      </Flex>
      <StatDetail
        statNumber="50K"
        incrementNumber="12%"
        period="vs last 7 days"
      />
    </Board>
  );
};

export default ProfitsBoard;
