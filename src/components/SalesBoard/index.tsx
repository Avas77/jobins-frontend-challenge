import React from "react";
import Board from "../Board";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import StatDetail from "../StatDetail";

const SalesBoard = () => {
  return (
    <Board pt="2rem" pl="4.3rem" pb="2.8rem" display="flex" flex="0 1 35%">
      <Box
        borderRight="1px solid #DBDADE"
        pr="3.9rem"
        display="flex"
        alignItems="center"
      >
        <Image src="/assets/business.svg" width="73rem" maxW="7.3rem" />
      </Box>
      <Stack pl="3.3rem" pr="5.2rem" gap="3rem">
        <Stack>
          <Text fontSize="1.8rem" fontWeight={600} gap="0.4rem">
            Total Sales & Costs
          </Text>
          <Text fontSize="1.4rem" fontWeight={500} color="#8B909A">
            Last 7 days
          </Text>
        </Stack>
        <StatDetail
          statNumber="$350K"
          incrementNumber="8.56K"
          period="vs last & days"
        />
      </Stack>
    </Board>
  );
};

export default SalesBoard;
